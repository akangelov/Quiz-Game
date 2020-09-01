const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const id = req.query.id
    const category = req.query.category

    if (id) {
      models.Origami.findById(id)
      .then((origami) => res.send(origami))
      .catch(next);
      return;
    }
    if (category) { models.Origami.find({ category: `${category}` })
      .then((origamies) => res.send(origamies))
      .catch(next);
      return;
    }
    models.Origami.find()
    .then((origamies) => res.send(origamies))
    .catch(next);
    return;
  },

  post: (req, res, next) => {
    const { category, question, answerA, answerB, answerC, answerD, correctAnswer } = req.body;
    const { _id } = req.user;

    models.Origami.create({ category, question, answerA, answerB, answerC, answerD, correctAnswer, author: _id })
      .then((createdOrigami) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { posts: createdOrigami } }),
          models.Origami.findOne({ _id: createdOrigami._id })
        ]);
      })
      .then(([modifiedObj, origamiObj]) => {
        res.send(origamiObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { category, question, answerA, answerB, answerC, answerD, correctAnswer } = req.body;
    models.Origami.updateOne({ _id: id }, { category, question, answerA, answerB, answerC, answerD, correctAnswer })
      .then((updatedOrigami) => res.send(updatedOrigami))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Origami.deleteOne({ _id: id })
      .then((removedOrigami) => res.send(removedOrigami))
      .catch(next)
  }
};
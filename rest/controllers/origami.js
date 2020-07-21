const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const id = req.query.id
    console.log(id)
    // console.log(req.body)
    const category = req.query.category
    // console.log(category)
    const limit = +req.query.limit;
    if (limit) {
      models.Origami.find().populate('author').sort({ _id: -1 }).limit(limit)
        .then((origamies) => res.send(origamies))
        .catch(next);
      return;
    }
    // if (category) {
    //   models.Origami.find({'category': category})
    //   .then((origamis) => res.send(origamis))
    //   .catch(next);
    // }
    if (id) {
      models.Origami.findById(id)
      .then((origami) => res.send(origami))
      .catch(next);
      return;
    }
    models.Origami.find({ category: `${category}` }).populate('author')
      .then((origamies) => res.send(origamies))
      .catch(next);
  },

  post: (req, res, next) => {
    const { category, question, answerA, answerB, answerC, answerD } = req.body;
    const { _id } = req.user;

    models.Origami.create({ category, question, answerA, answerB, answerC, answerD, author: _id })
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
    const { description } = req.body;
    models.Origami.updateOne({ _id: id }, { description })
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
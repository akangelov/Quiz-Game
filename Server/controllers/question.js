const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const id = req.query.id
        const category = req.query.category

        if (id) {
            models.Question.findById(id)
                .then((question) => res.send(question))
                .catch(next);
                return;
        }
        if (category) { models.Question.find({ category: `${category}` })
            .then((questions) => res.send(questions))
            .catch(next);
            return;
        }
        models.Question.find()
            .then((questions) => res.send(questions))
            .catch(next);
            return;
  },

    post: (req, res, next) => {
        const { category, question, answerA, answerB, answerC, answerD, correctAnswer } = req.body;
        const { _id } = req.user;       
        models.Question.create({ category, question, answerA, answerB, answerC, answerD, correctAnswer, author: _id })
            .then((createdQuestion) => {
            return Promise.all([
                models.User.updateOne({ _id }, { $push: { posts: createdQuestion } }),
                models.Question.findOne({ _id: createdQuestion._id })
            ]);
          })
            .then(([modifiedObj, questionObj]) => {
                res.send(questionObj);
          })
          .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { category, question, answerA, answerB, answerC, answerD, correctAnswer } = req.body;
    models.Question.updateOne({ _id: id }, { category, question, answerA, answerB, answerC, answerD, correctAnswer })
      .then((updatedQuestion) => res.send(updatedQuestion))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Question.deleteOne({ _id: id })
      .then((removedQuestion) => res.send(removedQuestion))
      .catch(next)
  }
};
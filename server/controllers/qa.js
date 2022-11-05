const { models } = require('../models');

console.log(models);
module.exports = {
  getQuestions: () => {

  },

  getAnswers: () => {

  },

  addQuestion: () => {

  },

  addAnswer: () => {

  },

  helpfulQuestion: () => {

  },

  reportQuestion: () => {

  },

  helpfulAnswer: (req, res) => {
    models.helpfulAnswer(req.params.answerID)
      .then(() => res.sendStatus(204))
      .catch((err) => console.log(err));
  },

  reportAnswer: (req, res) => {
    models.reportAnswer(req.params.answerID)
      .then(() => res.sendStatus(204))
      .catch((err) => console.log(err));
  },
};

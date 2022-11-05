const { models } = require('../models');

console.log(models);
module.exports = {
  getQuestions: () => {

  },

  getAnswers: () => {

  },

  addQuestion: (req, res) => {
    models.addQuestion(req.body)
      .then(() => console.log('question added CONTR'))
      .catch((err) => console.log(err));
  },

  addAnswer: (req, res) => {
    models.addAnswer(req.body, req.params.question_id)
      .then(() => res.sendStatus(201))
      .catch((err) => console.log(err));
  },

  helpfulQuestion: (req, res) => {
    models.helpfulQuestion(req.params.question_id)
      .then(() => res.sendStatus(204))
      .catch((err) => console.log(err));
  },

  reportQuestion: (req, res) => {
    models.reportQuestion(req.params.question_id)
      .then(() => res.sendStatus(204))
      .catch((err) => console.log(err));
  },

  helpfulAnswer: (req, res) => {
    models.helpfulAnswer(req.params.answer_id)
      .then(() => res.sendStatus(204))
      .catch((err) => console.log(err));
  },

  reportAnswer: (req, res) => {
    models.reportAnswer(req.params.answer_id)
      .then(() => res.sendStatus(204))
      .catch((err) => console.log(err));
  },
};

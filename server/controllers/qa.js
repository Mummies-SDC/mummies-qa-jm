const { models } = require('../models');

module.exports = {
  getQuestions: (req, res) => {
    models.getQuestions(req.params.product_id)
      .then((questions) => res.json({ product_id: req.params.product_id, results: questions }))
      .catch((err) => console.log(err));
  },

  getAnswers: (req, res) => {
    console.log('question id: ', req.params.question_id);
    models.getAnswers(req.params.question_id)
      .then((answers) => res.json(answers))
      .catch((err) => console.log(err));
  },

  addQuestion: (req, res) => {
    // models.addQuestion(req.body)
    //   .then(() => console.log('question added CONTR'))
    //   .catch((err) => console.log(err));
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

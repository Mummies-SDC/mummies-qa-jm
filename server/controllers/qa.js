const { models } = require('../models');

module.exports = {
  getQuestions: (req, res) => {
    models.getQuestions(req.params.product_id)
      .then((questions) => res.json({ product_id: req.params.product_id, results: questions }))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getAnswers: (req, res) => {
    models.getAnswers(req.params.question_id)
      .then((answers) => res.json(answers))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addQuestion: (req, res) => {
    models.addQuestion(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addAnswer: (req, res) => {
    models.addAnswer(req.body, req.params.question_id)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  helpfulQuestion: (req, res) => {
    models.helpfulQuestion(req.params.question_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  reportQuestion: (req, res) => {
    models.reportQuestion(req.params.question_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  helpfulAnswer: (req, res) => {
    models.helpfulAnswer(req.params.answer_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  reportAnswer: (req, res) => {
    models.reportAnswer(req.params.answer_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};

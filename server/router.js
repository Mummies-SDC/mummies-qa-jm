const router = require('express').Router();
const controllers = require('./controllers');

// // QA ROUTES
// router.get('/qa/questions/', controllers.qa.getQuestions);
// router.get('/qa/questions/:question_id/answers', controllers.qa.getAnswers);
router.post('/qa/questions', controllers.qa.addQuestion);
router.post('/qa/questions/:question_id/answers', controllers.qa.addAnswer);
router.put('/qa/questions/:question_id/helpful', controllers.qa.helpfulQuestion);
router.put('/qa/questions/:question_id/report', controllers.qa.reportQuestion);
router.put('/qa/answers/:answer_id/helpful', controllers.qa.helpfulAnswer);
router.put('/qa/answers/:answer_id/report', controllers.qa.reportAnswer);

module.exports = router;

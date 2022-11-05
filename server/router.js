const router = require('express').Router();
const controllers = require('./controllers');

// // QA ROUTES
// router.get('/questions/:productID', controllers.qa.getQuestions);
// router.get('/answers/:questionID', controllers.qa.getAnswers);
// router.post('/ask', controllers.qa.addQuestion); // PRODUCT ID GOES IN BODY
// router.post('/answer/:questionID', controllers.qa.addAnswer);
// router.put('/question/helpful/:questionID', controllers.qa.helpfulQuestion);
// router.put('/question/report/:questionID', controllers.qa.reportQuestion);
router.put('/answer/:answerID/helpful', controllers.qa.helpfulAnswer);
router.put('/answer/:answerID/report', controllers.qa.reportAnswer);

module.exports = router;

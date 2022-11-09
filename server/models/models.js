const db = require('../db/index.js');

module.exports = {

  getQuestions: (productId, page, count) => {
    const queryString = `
      SELECT q.id, q.body, q.date_written, q.asker_name, q.helpfulness,

      json_build_object(
        a.id, json_build_object(
          'id', a.id,
          'body', a.body,
          'date', a.date_written,
          'answerer_name', a.answerer_name,
          'helpfulness', a.helpfulness,
          'photos', json_agg(p.url))) AS answers

      FROM questions AS q

      INNER JOIN answers AS a
      ON q.id = a.question_id

      INNER JOIN answers_photos AS p
      ON a.id = p.answer_id

      WHERE product_id = ${productId} AND q.reported = false

      GROUP BY q.id, q.body, q.date_written, q.asker_name, q.helpfulness, a.id, a.body, a.date_written, a.answerer_name, a.helpfulness
      ORDER BY q.helpfulness desc;
    `;
    return db.query(queryString)
      .then((res) => res.rows)
      .catch((err) => console.log(err));
  },

  getAnswers: (questionId) => {
    const queryString = `
      SELECT a.id, a.body, a.date_written, a.answerer_name, a.helpfulness, json_agg(p.url) AS photos

        FROM answers AS a

        INNER JOIN answers_photos as p
        ON a.id = p.answer_id

        WHERE a.question_id = ${questionId} AND a.reported = false

        GROUP BY a.id
        ORDER BY a.helpfulness desc;
    `;
    return db.query(queryString)
      .then((res) => res.rows)
      .catch((err) => console.log(err));
  },

  addQuestion: (question) => {
    const {
      body, name, email, product_id,
    } = question;
    const queryString = `
      INSERT INTO questions 
        (product_id, body, date_written, asker_name, asker_email, reported, helpfulness) 
      VALUES 
        (${product_id}, ${body}, extract(epoch from now()) * 1000, ${name}, ${email}, DEFAULT, DEFAULT RETURNING id);
      `;
    db.query(queryString)
      .then((res) => console.log(`question ${res.rows[0].id} added successfully`))
      .catch((err) => console.log(err));
  },

  addAnswer: (answer, questionId) => {
    const {
      body, name, email, photos,
    } = answer;
    console.log('body: ', body, 'name: ', name, 'email: ', email, 'photos: ', photos, 'questionID: ', questionId);
    const answerQueryString = `
      INSERT INTO answers 
        (question_id, body, date_written, answerer_name, answerer_email, reported, helpfulness) 
      VALUES 
        (${questionId}, $$${body}$$, extract(epoch from now()) * 1000, $$${name}$$, $$${email}$$, DEFAULT, DEFAULT) 
      RETURNING id;
    `;
    return db.query(answerQueryString)
      .then((res) => {
        console.log(`answer ${res.rows[0]} added successfully`);
        photos.forEach((photo) => {
          console.log('answer id: ', res.rows[0].id, 'photo: ', photo);
          const photoQueryString = `INSERT INTO answers_photos(id, answer_id, url) VALUES (DEFAULT, ${res.rows[0].id}, $$${photo}$$)`;
          db.query(photoQueryString)
            .then(() => console.log('photo added successfully'))
            .catch((err) => console.log(err));
        });
      });
  },

  helpfulQuestion: (questionId) => {
    const queryString = `UPDATE questions SET helpfulness = helpfulness + 1 WHERE id = ${questionId}`;
    db.query(queryString)
      .then(() => console.log(`question ${questionId} marked helpful succesfully`))
      .catch((err) => console.log(err));
  },

  reportQuestion: (questionId) => {
    const queryString = `UPDATE questions SET reported = true WHERE id = ${questionId}`;
    return db.query(queryString)
      .then(() => console.log(`question ${questionId} reported succesfully`))
      .catch((err) => console.log(err));
  },

  helpfulAnswer: (answerId) => {
    const queryString = `UPDATE answers SET helpfulness = helpfulness + 1 WHERE id = ${answerId}`;
    return db.query(queryString)
      .then(() => console.log(`answer ${answerId} marked helpful succesfully`))
      .catch((err) => console.log(err));
  },

  reportAnswer: (answerId) => {
    const queryString = `UPDATE answers SET reported = true WHERE id = ${answerId}`;
    return db.query(queryString)
      .then(() => console.log(`answer ${answerId} reported succesfully`))
      .catch((err) => console.log(err));
  },
};

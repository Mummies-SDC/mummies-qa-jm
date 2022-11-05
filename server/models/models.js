const db = require('../db/index.js');

module.exports = {

  getQuestions: (productId) => {
    const queryString = '';
  },

  getAnswers: (questionId) => {
    const queryString = '';
  },

  addQuestion: (question) => {
    const {
      body, name, email, product_id,
    } = question;
    const queryString = `INSERT INTO questions (product_id, body, date_written, asker_name, asker_email, reported, helpfulness) VALUES (${product_id}, ${body}, extract(epoch from now()) * 1000, ${name}, ${email}, DEFAULT, DEFAULT RETURNING id)`;
    db.query(queryString)
      .then((res) => console.log(`question ${res.rows[0].id} added successfully`))
      .catch((err) => console.log(err));
  },

  addAnswer: (answer, questionId) => {
    const {
      body, name, email, photos,
    } = answer;
    console.log('body', body, 'name', name, 'email', email, 'photos', photos);
    const answerQueryString = `INSERT INTO answers (question_id, body, date_written, answerer_name, answerer_email, reported, helpful) VALUES (${questionId}, ${body}, extract(epoch from now()) * 1000, ${name}, ${email}, DEFAULT, DEFAULT) RETURNING id`;
    return db.query(answerQueryString)
      .then((res) => {
        console.log(`answer ${res.rows[0]} added successfully`);
        photos.forEach((photo) => {
          const photoQueryString = `INSERT INTO answers_photos(answer_id, url) VALUES (${res.rows[0].id}, ${photo}})`;
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

// client.query(queryTest, (err, res) => {
//   if (err) {
//     console.log(err);
//   }
//   res.rows.map((row) => {
//     if (!row.reported) {
//       row.reported = 0;
//       return row;
//     }
//     row.reported = 1;
//     return row;
//   });
// });

// console.log(module.exports.addAnswer({
//   body: 'Something pretty durable but I cant be sure',
//   name: 'metslover',
//   email: 'metslover@gmail.com',
//   photos: ['urlplaceholder/answer_5_photo_number_1.jpg', 'urlplaceholder/answer_5_photo_number_2.jpg'],
// }, 250000));

// addAnswer: (answer, questionId) => {
//   const {
//     body, name, email, photos,
//   } = answer;
//   const answerQueryString = `INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email, reported, helpful) VALUES (${questionId}, ${body}, extract(epoch from now()) * 1000, ${name}, ${email}, DEFAULT, DEFAULT) RETURNING id`;
//   db.query(answerQueryString, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else if (res) {
//       console.log(`answer ${res.rows[0]} added successfully`);
//       photos.forEach((photo) => {
//         const photoQueryString = `INSERT INTO answers_photos(id, answer_id, url) VALUES (DEFAULT, ${res.rows[0].id}, ${photo.url}})`;
//         db.query(photoQueryString, (err, res) => {
//           if (err) {
//             console.log(err);
//           } else if (res) {
//             console.log('photo added successfully');
//           }
//         });
//       });
//     }
//   });
// },

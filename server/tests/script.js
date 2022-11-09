import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 150,
  duration: '30s',
};

export default function () {
  const questionId = 3167066 + Math.floor(Math.random() * 351897);
  http.get(`http://localhost:3000/qa/questions/${questionId}/answers`);
  sleep(1);
}

// export default function () {
//   const questionId = 3167066 + Math.floor(Math.random() * 351897);
//   const url = `http://localhost:3000/qa/questions/${questionId}/answers`;
//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   const payload = JSON.stringify({
//     body: 'Something pretty durable but I cant be sure',
//     name: 'metslover',
//     email: 'metslover@gmail.com',
//     photos: ['urlplaceholder/answer_5_photo_number_1.jpg', 'urlplaceholder/answer_5_photo_number_2.jpg'],
//   });
//   http.post(url, payload, params);
//   sleep(1);
// }

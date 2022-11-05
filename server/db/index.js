const { Client } = require('pg');

const credentials = {
  user: 'jake-manning',
  host: 'localhost',
  database: 'qa',
};

const client = new Client(credentials);
client.connect();
client.query('SELECT $1::text as message', ['Database connection successful'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
});

module.exports = client;

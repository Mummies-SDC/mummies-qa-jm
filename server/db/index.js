require('dotenv').config();
const { Client } = require('pg');

const credentials = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const client = new Client(credentials);
client.connect();
client.query('SELECT $1::text as message', ['Database connection successful'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
});

module.exports = client;

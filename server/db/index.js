require('dotenv').config();
const { Pool } = require('pg');

const credentials = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pool = new Pool(credentials);
pool.connect();
pool.query('SELECT $1::text as message', ['Database connection successful'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
});

module.exports = pool;

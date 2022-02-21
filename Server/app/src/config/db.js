const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) return console.error("error" + err.message);

  let createTable = `CREATE TABLE IF NOT EXISTS users(
    user_id VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    question_num INT NOT NULL,
    question_answer VARCHAR(30) NOT NULL,
    PRIMARY KEY(user_id)
  )`;

  db.query(createTable, (err, result, field) => {
    if (err) throw err;
  });

  db.end((err) => {
    if (err) return console.log(err.message);
  });
});

module.exports = db;

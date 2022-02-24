const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) return console.error("error" + err.message);

  let createTableUsers = `CREATE TABLE IF NOT EXISTS users(
    user_id VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    question_num INT NOT NULL,
    question_answer VARCHAR(30) NOT NULL,
    PRIMARY KEY(user_id)
  )`;

  let createTableCandy = `CREATE TABLE IF NOT EXISTS candy(
    candy_num INT NOT NULL,
    message VARCHAR(200) NOT NULL,
    emogi_num INT NOT NULL,
    img MEDIUMBLOB NOT NULL,
    sender_name VARCHAR(20) NOT NULL,
    user_id VARCHAR(20) NOT NULL,
    send_time TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY(candy_num)
  )`;

  let createTableReport = `CREATE TABLE IF NOT EXISTS report(
    candy_num INT NOT NULL,
    content VARCHAR(100) NOT NULL,
    PRIMARY KEY(candy_num)
  )`;

  db.query(createTableUsers, (err, result, field) => {
    if (err) throw err;
  });
  db.query(createTableCandy, (err, result, field) => {
    if (err) throw err;
  });
  db.query(createTableReport, (err, result, field) => {
    if (err) throw err;
  });

  db.end((err) => {
    if (err) return console.log(err.message);
  });
});

module.exports = db;

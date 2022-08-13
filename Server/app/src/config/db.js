const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
// });

// db.connect((err) => {
//   if (err) return console.error("error" + err.message);

//   let createTableUsers = `CREATE TABLE IF NOT EXISTS users(
//     user_id VARCHAR(20) NOT NULL,
//     password VARCHAR(100) NOT NULL,
//     nickname VARCHAR(10) NOT NULL,
//     question_num INT NOT NULL,
//     question_answer VARCHAR(30) NOT NULL,
//     PRIMARY KEY(user_id)
//   )`;

//   let createTableCandy = `CREATE TABLE IF NOT EXISTS candy(
//     candy_num INT NOT NULL AUTO_INCREMENT,
//     message VARCHAR(2000),
//     emoji_num VARCHAR(50) NOT NULL,
//     img MEDIUMBLOB,
//     sender_name VARCHAR(20) NOT NULL,
//     user_id VARCHAR(20) NOT NULL,
//     send_time TIMESTAMP NOT NULL DEFAULT NOW(),
//     PRIMARY KEY(candy_num)
//   )`;

//   let createTableReport = `CREATE TABLE IF NOT EXISTS report(
//     candy_num INT NOT NULL,
//     content VARCHAR(100),
//     PRIMARY KEY(candy_num)
//   )`;

//   db.query(createTableUsers, (err, result, field) => {
//     if (err) throw err;
//   });
//   db.query(createTableCandy, (err, result, field) => {
//     if (err) throw err;
//   });
//   db.query(createTableReport, (err, result, field) => {
//     if (err) throw err;
//   });
// });


var pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

module.exports = {
  query: function(){
      var sql_args = [];
      var args = [];
      for(var i=0; i<arguments.length; i++){
          args.push(arguments[i]);
      }
      var callback = args[args.length-1]; //last arg is callback
      pool.getConnection(function(err, connection) {
      if(err) {
              console.log(err);
              return callback(err);
          }
          if(args.length > 2){
              sql_args = args[1];
          }
      connection.query(args[0], sql_args, function(err, results) {
        connection.release(); // always put connection back in pool after last query
        if(err){
                  console.log(err);
                  return callback(err);
              }
        callback(null, results);
      });
    });
  }
};

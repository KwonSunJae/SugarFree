const db = require("../config/db");

class UserModel {
  static getUserInfo(user_id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE user_id=?;";
      db.query(query, [user_id], (err, data) => {
        if (resolve) resolve(data[0]);
        else reject(err);
      });
    });
  }

  static getUserId(idColumn) {
    return new Promise((resolve, reject) => {
      const query = "SELECT user_id FROM users WHERE user_id=?;";
      db.query(query, [idColumn.user_id], (err, data) => {
        if (resolve) {
          if (data[0] === undefined) {
            resolve({ result: true });
          } else {
            resolve({ result: false });
          }
        } else reject(err);
      });
    });
  }

  static save(userInfo) {
    return new Promise((resolve, reject) => {
      console.log(userInfo);
      const query =
        "INSERT INTO users(user_id, password, question_num, question_answer) VALUES(?,?,?,?);";
      db.query(
        query,
        [
          userInfo.user_id,
          userInfo.password,
          userInfo.question_num,
          userInfo.question_answer,
        ],
        (err) => {
          if (err) reject(err);
          resolve({ result: true });
        }
      );
    });
  }
}

module.exports = UserModel;

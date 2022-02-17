const db = require("../config/db");

class UserModel {
  static getUserInfo(user_id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id=?;";
      db.query(query, [user_id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }

  static save(userInfo) {
    return new Promise((resolve, reject) => {
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

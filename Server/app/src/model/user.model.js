const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserModel {
  // 로그인 시 회원정보 DB에서 가져오기
  static getUserInfo(user_id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE user_id=?;";
      db.query(query, [user_id], (err, results, fields) => {
        if (resolve) resolve(results[0]);
        else reject(err);
      });
    });
  }

  // 회원가입 전 id중복체크
  static getUserId(idColumn) {
    return new Promise((resolve, reject) => {
      const query = "SELECT user_id FROM users WHERE user_id=?;";
      db.query(query, [idColumn.user_id], (err, results, fields) => {
        if (resolve) {
          if (results[0] === undefined) {
            resolve({ result: true });
          } else {
            resolve({ result: false });
          }
        } else reject(err);
      });
    });
  }

  // 회원가입 정보 DB에 저장
  static save(userInfo) {
    return new Promise((resolve, reject) => {
      const newPW = bcrypt.hashSync(userInfo.password, saltRounds);
      const query =
        "INSERT INTO users(user_id, password, nickname, question_num, question_answer) VALUES(?,?,?,?,?);";
      db.query(
        query,
        [
          userInfo.user_id,
          newPW,
          userInfo.nickname,
          userInfo.question,
          userInfo.answer,
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

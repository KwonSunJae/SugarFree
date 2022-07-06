const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserModel {
  // 총 가입자 수를 return
  static getTotalMember() {
    return new Promise((resolve, reject) => {
      const query = `SELECT COUNT(user_id) as count FROM users;`;
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results[0].count);
      });
    });
  }

  // 총 캔디 수를 return
  static getTotalCandy() {
    return new Promise((resolve, reject) => {
      const query = `SELECT COUNT(candy_num) as count FROM candy;`;
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results[0].count);
      });
    });
  }
  // 로그인 시 회원정보 DB에서 가져오기
  static getUserInfo(user_id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE user_id=?;";
      db.query(query, [user_id], (err, results) => {
        if (err) reject(err);
        return resolve(results[0]);
      });
    });
  }

  // user nickname 반환
  static getNickname(user_id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT nickname FROM users WHERE user_id=?;";
      db.query(query, [user_id], (err, results) => {
        if (err) reject(err);
        return resolve(results[0]);
      });
    });
  }

  // 회원가입 전 id중복체크
  static getUserId(idColumn) {
    return new Promise((resolve, reject) => {
      const query = "SELECT user_id FROM users WHERE user_id=?;";
      db.query(query, [idColumn.id], (err, results) => {
        if (resolve) {
          // console.log(results[0]);
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
      const newPW = bcrypt.hashSync(userInfo.pw, saltRounds);
      const query =
        "INSERT INTO users(user_id, password, nickname, question_num, question_answer) VALUES(?,?,?,?,?);";
      db.query(
        query,
        [
          userInfo.id,
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

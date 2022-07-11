const db = require("../config/db");

class CandyModel {
  // 현재까지 받은 candy목록 조회
  static getCandyInfo(user_id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT c.candy_num, c.sender_name,c.img,c.emoji_num FROM candy AS c JOIN users ON c.user_id=users.user_id WHERE users.user_id=?;`;
      db.query(query, [user_id], (err, results) => {
        if (err) reject(err);
        return resolve(results);
      });
    });
  }

  // candy를 까서 보여주기
  static showMyCandyInfo(userInfo) {
    return new Promise((resolve, reject) => {
      const query = `SELECT c.sender_name,c.message,c.img,c.candy_num,c.emoji_num FROM candy AS c JOIN users ON c.user_id=users.user_id WHERE users.user_id=? AND c.candy_num=?;`;
      db.query(query, [userInfo.id, userInfo.candy_num], (err, results) => {
        if (err) reject(err);
        return resolve(results[0]); // candy를 하나씩 까서 보여주기
      });
    });
  }

  // 보낸 candy DB에 INSERT
  static giveCandy(userInfo) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO candy(message, emoji_num, img, sender_name, user_id, send_time) VALUES(?,?,?,?,?,NOW());`;
      db.query(
        query,
        [
          userInfo.description,
          userInfo.emoji,
          userInfo.photo,
          userInfo.name,
          userInfo.user_id,
        ],
        (err, results) => {
          if (err) reject(err);
          return resolve({ result: true });
        }
      );
    });
  }
}

module.exports = CandyModel;

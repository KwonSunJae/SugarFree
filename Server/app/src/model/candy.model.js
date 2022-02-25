const db = require("../config/db");

class CandyModel {
  // 개인이 받은 candy 조회
  static getUserInfo(user_id) {}

  // 개인이 받은 candy 조회
  static getCandyInfo(user_id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT candy.sender_name,candy.img,candy.emoji_num FROM candy JOIN users ON candy.user_id=users.user_id WHERE users.user_id=?;`;
      db.query(query, [user_id], (err, results) => {
        if (resolve) resolve(results);
        else reject(err);
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

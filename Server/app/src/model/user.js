const UserModel = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("../module/jwt");
const logger = require("../module/winston");

class User {
  constructor(body) {
    this.body = body;
  }

  async main() {
    try {
      const totalMember = await UserModel.getTotalMember();
      const totalCandy = await UserModel.getTotalCandy();
      return { total_member: totalMember, total_candy: totalCandy };
    } catch (err) {
      console.error(err);
    }
  }

  async getNickname() {
    try {
      const getUserInfo = await UserModel.getNickname(this.body.id);
      console.log(this.body.id)
      return getUserInfo;
    } catch (err) {
      console.error(err);
    }
  }
  async login() {
    try {
      const userInfo = await UserModel.getUserInfo(this.body.id);
      const user_id = userInfo.user_id;
      const user_pw = userInfo.password;
      const jwtToken = await jwt.sign(user_id);
      if (user_id) {
        logger.info(`id=${user_id}, id2=${ this.body.id}`)
        if (user_id === this.body.id) {
          const isEqualPW = bcrypt.compareSync(this.body.pw, user_pw);
          if (isEqualPW) {
            logger.info("id and pw equal");
            return { result: true, token: jwtToken };
          } else {
            logger.error("pw not equal");
            return { result: false };
          }
        } else {
          logger.error("id not equal");
          return { result: false };
        }
      } else {
        logger.error("no id");
        return { result: false };
      }
    } catch (err) {
      logger.error(err);
    }
  }

  async register() {
    try {
      const response = await UserModel.save(this.body);
      return response;
    } catch (err) {
      console.error(err);
    }
  }

  async validate() {
    try {
      const response = await UserModel.getUserId(this.body);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = User;

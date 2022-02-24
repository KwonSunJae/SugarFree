const UserModel = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("../module/jwt");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    try {
      const { user_id, password } = await UserModel.getUserInfo(
        this.body.user_id
      );
      const jwtToken = await jwt.sign(user_id);
      if (user_id) {
        if (user_id === this.body.user_id) {
          const isEqualPW = bcrypt.compareSync(this.body.password, password);
          if (isEqualPW) {
            return { result: true, token: jwtToken };
          } else {
            return { result: false };
          }
        } else {
          return { result: false };
        }
      } else {
        return { result: false };
      }
    } catch (err) {
      console.error(err);
    }
  }

  async register() {
    try {
      console.log(this.body);
      const response = await UserModel.save(this.body);
      return response;
    } catch (err) {
      console.error(err);
    }
  }

  async validate() {
    try {
      const response = await UserModel.getUserId(this.body);
      console.log(this.body)
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = User;

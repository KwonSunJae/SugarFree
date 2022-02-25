const UserModel = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("../module/jwt");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    try {
      const { user_id, password } = await UserModel.getUserInfo(this.body.id);
      console.log(password);
      console.log(user_id);
      console.log(this.body.id);
      console.log(this.body.pw);
      const jwtToken = await jwt.sign(user_id);
      if (user_id) {
        if (user_id === this.body.id[0]) {
          console.log("id equal");
          const isEqualPW = bcrypt.compareSync(this.body.pw[0], password);
          if (isEqualPW) {
            console.log("pw equal");
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

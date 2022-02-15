const UserModel = require("./user.model");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    //console.log(this.body.user_id);
    try {
      const { user_id, password } = await UserModel.getUserInfo(
        this.body.user_id
      );
      console.log(password);
      if (user_id) {
        if (user_id === this.body.user_id && password === this.body.password) {
          return { result: true };
        } else {
          return { result: false };
        }
      } else {
        return { result: false };
      }
    } catch (err) {
      return { result: false, message: err };
    }
  }

  register() {
    const response = UserModel.save(this.body);
    return response;
  }
}

module.exports = User;

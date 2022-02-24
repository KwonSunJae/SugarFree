const CandyModel = require("../model/candy.model");
class Candy {
  constructor(body) {
    this.body = body;
  }

  getMyCandy() {
    const user_id = CandyModel.getCandyInfo();
  }
}

module.exports = Candy;

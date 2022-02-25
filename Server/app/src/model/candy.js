const CandyModel = require("../model/candy.model");
class Candy {
  constructor(body) {
    this.body = body;
  }

  async getMyCandy() {
    try {
      const myCandyInfo = await CandyModel.getCandyInfo(this.body.id);
      return myCandyInfo;
    } catch (err) {
      console.error(err);
    }
  }

  async giveYouCandy() {
    try {
      const response = await CandyModel.giveCandy(this.body);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Candy;

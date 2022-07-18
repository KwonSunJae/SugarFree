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
      logger.error(JSON.stringify(err));
    }
  }

  async giveYouCandy() {
    try {
      const response = await CandyModel.giveCandy(this.body);
      return response;
    } catch (err) {
      logger.error(JSON.stringify(err));
    }
  }

  async showMyCandy() {
    try {
      const showCandyInfo = await CandyModel.showMyCandyInfo(this.body);
      return showCandyInfo;
    } catch (err) {
      logger.error(JSON.stringify(err));
    }
  }
}

module.exports = Candy;

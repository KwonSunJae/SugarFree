const Candy = require("../model/candy");

const output = {};

const process = {
  myCandy: async (req, res) => {
    const candy = new Candy(req.body);
    const response = await candy.getMyCandy();
    return res.json(response);
  },
  giveCandy: async (req, res) => {
    const candy = new Candy(req.body);
    const response = await candy.giveYouCandy();
    console.log(response);
    return res.json(response);
  },
  showCandy: async (req, res) => {
    const candy = new Candy(req.body);
    const response = await candy.showMyCandy();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

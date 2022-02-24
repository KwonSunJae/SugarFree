const Candy = require("../model/candy");

const output = {};

const process = {
  myCandy: (req, res) => {
    const candy = new Candy(req.body);
  },
  giveCandy: (req, res) => {},
  showCandy: (req, res) => {},
};

module.exports = {
  output,
  process,
};

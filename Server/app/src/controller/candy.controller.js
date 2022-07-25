const Candy = require("../model/candy");

const output = {};

const process = {
  myCandy: async (req, res) => {
    const candy = new Candy(req.body);
    const response = await candy.getMyCandy();
    logger.info(JSON.stringify(req.body));
    return res.json(response);
  },
  giveCandy: async (req, res) => {
    const candy = new Candy(req.body);
    const response = await candy.giveYouCandy();
    logger.info(JSON.stringify(req.body));
    return res.json(response);
  },
  showCandy: async (req, res) => {
    const candy = new Candy(req.body);
    const response = await candy.showMyCandy();
    logger.info(JSON.stringify(req.body));
    return res.json(response);
  },
  setCandyImage: async (req, res, next) => {
    logger.info(JSON.stringify(req.file.uri));
    return res.json({ url : req.file.uri });
  },
};

module.exports = {
  output,
  process,
};

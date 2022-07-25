const User = require("../model/user");

const output = {
  main: async (req, res) => {
    const user = new User(req.query);
    const response = await user.main();
    logger.info(JSON.stringify(req.query));
    return res.json(response);
  },
  userinfo: async (req, res) => {
    // req.query를 하면 postman에서는 제대로 동작하지 않음.
    //const user = new User(req.body);
    const user = new User(req.query);
    const response = await user.getNickname();
    logger.info(JSON.stringify(req.query));
    return res.json(response);
  },
  validate: async (req, res) => {
    const user = new User(req.query);
    const response = await user.validate();
    logger.info(JSON.stringify(req.query));
    return res.json(response);
  },
  logout: async (req, res) => {
    const user = new User(req.query);
    const response = await user.validate();
    logger.info(JSON.stringify(req.query));
    if (response.result === false) {
      return res.status(401).json({ result: true });
    } else {
      return res.status(200).json({ result: false });
    }
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    logger.info(JSON.stringify(req.body));
    if (response.result === false) {
      return res.status(401).json(response);
    } else {
      return res.status(200).json(response);
    }
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    logger.info(JSON.stringify(req.body));
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

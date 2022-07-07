const User = require("../model/user");

const output = {
  main: async (req, res) => {
    const user = new User(req.query);
    const response = await user.main();
    return res.json(response);
  },
  userinfo: async (req, res) => {
    // req.query를 하면 postman에서는 제대로 동작하지 않음.
    //const user = new User(req.body);
    const user = new User(req.query);
    const response = await user.getNickname();
    return res.json(response);
  },
  validate: async (req, res) => {
    const user = new User(req.query);
    const response = await user.validate();
    return res.json(response);
  },
  logout: async (req, res) => {
    const user = new User(req.query);
    const response = await user.validate();
    if (response.result === false) {
      return res.json({ result: true });
    } else {
      return res.json({ result: false });
    }
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

const User = require("../model/user");

const output = {
  validate: async (req, res) => {
    const user = new User(req.query);
    const response = await user.validate();
    return res.json(response);
  },
  logout: async (req, res) => {
    const user = new User(req.query);
    const response = await user.validate();
    console.log(response.result);
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

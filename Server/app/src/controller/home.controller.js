const User = require("../model/user");

const output = {
  validate: (req, res) => {
    res.render("home/register/vaildate");
  },
  logout: (req, res) => {
    res.render("home/logout");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

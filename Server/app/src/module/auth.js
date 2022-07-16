const jwt = require("./jwt");
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
  checkToken: async (req, res, next) => {
    var token = req.headers.token;
    console.log(req.headers);
    if (!token) {
      return res.json({ message: "not token" });
    }
    const user = await jwt.verify(token);
    if (user === TOKEN_EXPIRED) return res.status(401).json({ message: "token expired" });
    if (user === TOKEN_INVALID) return res.status(401).json({ message: "token invaild" });
    if (user.user_id === undefined) return res.status(401).json({ message: "not user" });

    req.user_id = user.user_id;
    next();
  },
};

module.exports = authUtil;

const randToken = require("rand-token");
const jwt = require("jsonwebtoken");
const secretKey = require("../config/secretkey").secretKey;
const option = require("../config/secretkey").option;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
  sign: async (user) => {
    console.log(user);
    const payLoad = {
      user_id: user,
    };
    console.log("token 발행 아이디 :",user);
    const result = {
      token: jwt.sign(payLoad, secretKey, option),
      refreshToken: randToken.uid(256),
    };
    return result;
  },
  verify: async (token) => {
    let decoded;
    try {
      decoded = jwt.verify(token, secretKey);
    } catch (err) {
      if (err.message === "jwt expired") {
        console.log("expired token");
        return TOKEN_EXPIRED;
      } else if (err.message === "invaild token") {
        console.log("invaild token");
        return TOKEN_INVALID;
      } else {
        console.log("invaild token");
        return TOKEN_INVALID;
      }
    }
    return decoded;
  },
};

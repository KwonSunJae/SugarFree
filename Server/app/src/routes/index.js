const express = require("express");
const router = express.Router();

const userCtrl = require("../controller/user.controller");
const candyCtrl = require("../controller/candy.controller");
const authUtil = require("../module/auth").checkToken;

router.get("/api/validate", userCtrl.output.validate);
router.get("/api/logout", userCtrl.output.logout);

router.post("/api/register", userCtrl.process.register);
router.post("/api/login", userCtrl.process.login);
router.post("/api/mycandy", candyCtrl.process.myCandy);
router.post("/api/givecandy", candyCtrl.process.giveCandy);

module.exports = router;

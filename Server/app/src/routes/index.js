const express = require("express");
const router = express.Router();

const ctrl = require("../controller/home.controller");
const authUtil = require("../module/auth").checkToken;

router.get("/api/validate", ctrl.output.validate);
router.get("/api/logout", ctrl.output.logout);

router.post("/api/register", ctrl.process.register);
router.post("/api/login", authUtil, ctrl.process.login);

module.exports = router;

const express = require("express");
const router = express.Router();

const ctrl = require("../controller/home.controller");

router.get("/home/validate", ctrl.output.validate);
router.get("/home/logout", ctrl.output.logout);

router.post("/home/register", ctrl.process.register);
router.post("/home/login", ctrl.process.login);

module.exports = router;

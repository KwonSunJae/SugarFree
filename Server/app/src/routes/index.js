const express = require("express");
const router = express.Router();

const ctrl = require("../controller/home.controller");

//router.get("/home/register/vaildate", ctrl.output.vaildate);

router.post("/home/register", ctrl.process.register);
router.post("/home/login", ctrl.process.login);

module.exports = router;

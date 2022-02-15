const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const home = require("./src/routes/index");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("success");
});

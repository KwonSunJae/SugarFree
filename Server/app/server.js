
const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const api = require("./src/routes/index");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", api);

const PORT = process.env.PORT || 5051;
app.listen(PORT, () => {
  console.log("success");
});

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Sugar Free");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("success");
});

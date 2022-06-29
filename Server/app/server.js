
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const whitelist = ["http://dev-front-tutor.openinfra-kr.org", "http://localhost:3000"];

const corsOptions ={
  origin: function(origin, callback){
    if(whitelist.indexOf(origin)!==-1){
      callback(null,true);
    }else{
      callback(new Error("Not allowed Origin!"));
    }
  },
  credentials : true,
}
const api = require("./src/routes/index");
app.use(cors(corsOptions));
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", api);

const PORT = process.env.PORT || 5051;
app.listen(PORT, () => {
  console.log("success");
});

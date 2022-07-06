
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require('./src/module/winston.js');
const morgan = require('morgan');
const combined = ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"' // 기존 combined 포멧에서 timestamp만 제거
const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : combined; // NOTE: morgan 출력 형태 server.env에서 NODE_ENV 설정 production : 배포 dev : 개발
console.log(morganFormat);
app.use(morgan(morganFormat, {stream : logger.stream}));
dotenv.config();

const whitelist = [
  "https://dev-front-tutor.openinfra-kr.org",
  "http://dev-front-tutor.openinfra-kr.org",
  "https://front-tutor.openinfra-kr.org",
  "http://front-tutor.openinfra-kr.org",
  "http://localhost:3000"
];


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

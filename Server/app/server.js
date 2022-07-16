const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
global.logger || (global.logger = require("./src/module/winston.js"));
const myMorgan = require("./src/middleware/myMorgan.js");
dotenv.config();

const whitelist = [
    "https://dev-front-tutor.openinfra-kr.org",
    "http://dev-front-tutor.openinfra-kr.org",
    "https://front-tutor.openinfra-kr.org",
    "http://front-tutor.openinfra-kr.org",
    "http://localhost:3000",
];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed Origin!"));
        }
    },
    credentials: true,
};

app.use(myMorgan);
app.use(cors(corsOptions));
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require("./src/routes/index");
app.use("/", api);
app.use((err, req, res, next) => {
    logger.Error(err.stack);
    res.json({ result: "failed", message: error.message });
});
const PORT = process.env.PORT || 5051;
app.listen(PORT, () => {
    logger.info(`Server ON PORT=${PORT}`);
});

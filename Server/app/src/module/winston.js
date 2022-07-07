const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
require("moment-timezone");
const moment = require("moment");
const { combine, timestamp, printf, colorize } = winston.format;

const logDir = "logs"; // logs 디렉토리 하위에 로그 파일 저장

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "blue",
};

winston.addColors(colors);

moment.tz.setDefault("Asia/Seoul");
const timeStamp = () => moment().format("YYYY-MM-DD HH:mm:ss"); // 한국 시간으로 설정

const logFormat = printf((info) => {
    return `${timeStamp()} [${info.level}] ${info.message}`;
});
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
    format: combine(logFormat, colorize({ all: true })),
    transports: [
        // info 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: "info",
            dirname: logDir,
            filename: `%DATE%.log`, // file 이름 날짜로 저장
            maxFiles: 30, // 30일치 로그 파일 저장
        }),
        // warn 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: "warn",
            dirname: logDir,
            filename: `%DATE%.warn.log`, // file 이름 날짜로 저장
            maxFiles: 30, // 30일치 로그 파일 저장
        }),
        // error 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: "error",
            dirname: logDir,
            filename: `%DATE%.error.log`,
            maxFiles: 30,
        }),
    ],
});

logger.stream = {
    // morgan wiston 설정
    write: (message) => {
        logger.info(message);
    },
};

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: logFormat,
            handleExceptions: true,
        })
    );
}

module.exports = logger;
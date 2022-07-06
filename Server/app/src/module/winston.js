const winston = require('winston') ;
const winstonDaily = require('winston-daily-rotate-file');
require('moment-timezone');
const moment = require('moment');

const { combine, timestamp, printf, colorize } = winston.format;

const logDir = 'logs';  // logs 디렉토리 하위에 로그 파일 저장

moment.tz.setDefault('Asia/Seoul');
const timeStamp = () => moment().format('YYYY-MM-DD HH:mm:ss'); // 한국 시간으로 설정

const logFormat = printf(({level, message}) => {
    return `${timeStamp()} ${level}: ${message}`;
});
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
    format: combine(
        colorize({ all: true }),
        timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat,
    ),
    transports: [
        // info 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: `%DATE%.log`, // file 이름 날짜로 저장
            maxFiles: 30,  // 30일치 로그 파일 저장
            zippedArchive: true, 
        }),
      	// warn 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: 'warn',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: `%DATE%.warn.log`, // file 이름 날짜로 저장
            maxFiles: 30,  // 30일치 로그 파일 저장
            zippedArchive: true, 
        }),
        // error 레벨 로그를 저장할 파일 설정
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),
    ],
});

logger.stream = {// morgan wiston 설정
    write: message => {
        logger.info(message);
    }
} 

// Production 환경이 아닌 경우(dev 등) 배포 환경에서는 최대한 자원을 안잡아 먹는 로그를 출력해야함
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: combine(
            colorize({ all: true }), // console 에 출력할 로그 컬러 설정 적용함
            logFormat // log format 적용
        )
    }));
}

module.exports = logger;
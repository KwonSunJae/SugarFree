const axios = require("axios");

const OS_ENDPOINT = process.env.OS_ENDPOINT;
const OS_TENANTID = process.env.OS_TENANTID;
const OS_USERNAME = process.env.OS_USERNAME;
const OS_PASSWORD = process.env.OS_PASSWORD;
const containerName = "/tutor";

var token;
var tokenExpiresTime;

const getAcessToken = async () => {
    // 만료되지않았다면 기존에 있던 토큰 사용
    if (tokenExpiresTime > new Date().toISOString()) {
        return token, tokenExpiresTime;
    }
    // 발급되지않았거나 만료되면 토큰 발급
    let tokenURL =
        "https://api-identity.infrastructure.cloud.toast.com/v2.0/tokens";
    let tokenHeader = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    let body = {
        auth: {
            tenantId: OS_TENANTID,
            passwordCredentials: {
                username: OS_USERNAME,
                password: OS_PASSWORD,
            },
        },
    };
    let result = await axios.post(tokenURL, body, tokenHeader);
    token = result.data.access.token.id;
    tokenExpiresTime = result.data.access.token.expires;
    logger.info("Get Token Success", token, tokenExpiresTime)
    return token, tokenExpiresTime;
};

const putHeader = (token, file) => {
    return {
        headers: {
            "X-Auth-Token": `${token}`,
            "Content-type": `${file.mimetype}`,
        },
    };
};

function ObjectStorage(opts) {
    this.getDestination = opts.destination;
}

ObjectStorage.prototype._handleFile = function _handleFile(req, file, cb) {
    this.getDestination(req, file, async function (err, container) {
        console.log("getDestination ---------------")
        if (err) {
            return cb(err);
        }
        // 토큰 발급
        await getAcessToken();
        let filename = encodeURI(Date.now() + "_" + file.originalname);
        let url = OS_ENDPOINT + containerName + container + filename;
        // 파일 전송
        axios
            .put(url, file.stream, putHeader(token, file))
            .then((response) => {
                logger.info("Put File Successed");
                logger.info(filename);
                // req.file에서 쓸 인자 추가
                cb(null, {
                    uri: url,
                    filename: filename,
                });
            })
            .catch((err) => {
                cb(err);
            });
    });
};

ObjectStorage.prototype._removeFile = function _removeFile(req, file, cb) {};

module.exports = function (opts) {
    return new ObjectStorage(opts);
};

const { AES, enc } = require('crypto-js');

const secretKey = 'PNNv0KGpdtMBhxKZIoRE37A5lc3ms';

exports.encrypt = (params) => {
    return AES.encrypt(params, secretKey).toString();
}

exports.decrypt = (params) => {
    return AES.decrypt(params, secretKey).toString(enc.Utf8);
}

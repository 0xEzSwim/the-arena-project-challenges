"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atoi = void 0;
const atoi = (str) => {
    let res = 0;
    let sign = 1;
    let i = 0;
    if (str[0] == '-') {
        sign = -1;
        i++;
    }
    if (str[0] == '+') {
        sign = 1;
        i++;
    }
    while (i < str.length) {
        if (str[i].charCodeAt(0) < '0'.charCodeAt(0) || str[i].charCodeAt(0) > '9'.charCodeAt(0)) {
            res = NaN;
            break;
        }
        res = res * 10 + str[i].charCodeAt(0) - '0'.charCodeAt(0);
        i++;
    }
    return sign * res;
};
exports.atoi = atoi;

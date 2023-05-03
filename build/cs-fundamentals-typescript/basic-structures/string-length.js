"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strLength = void 0;
const strLength = (str) => {
    let i = 0;
    while (typeof str[i] !== 'undefined') {
        i++;
    }
    return i;
};
exports.strLength = strLength;

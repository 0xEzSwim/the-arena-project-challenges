"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrLength = void 0;
const arrLength = (arr) => {
    let i = 0;
    while (typeof arr[i] !== 'undefined') {
        i++;
    }
    return i;
};
exports.arrLength = arrLength;

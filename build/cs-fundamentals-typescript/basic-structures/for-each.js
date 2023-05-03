"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
const array_length_1 = require("./array-length");
const forEach = (arr, cb) => {
    const arrayLength = (0, array_length_1.arrLength)(arr);
    let i = 0;
    while (i < arrayLength) {
        cb(arr[i++]);
    }
};
exports.forEach = forEach;

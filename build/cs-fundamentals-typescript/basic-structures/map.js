"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
const array_length_1 = require("./array-length");
const map = (arr, cb) => {
    const arrayLength = (0, array_length_1.arrLength)(arr);
    let i = 0;
    let newArr = [];
    while (i < arrayLength) {
        newArr[i] = cb(arr[i++]);
    }
    return newArr;
};
exports.map = map;

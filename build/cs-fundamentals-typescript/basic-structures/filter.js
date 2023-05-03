"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const array_length_1 = require("./array-length");
const filter = (arr, cb) => {
    const arrayLength = (0, array_length_1.arrLength)(arr);
    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < arrayLength) {
        let arrayValue = arr[i];
        if (cb(arrayValue)) {
            newArr[j++] = arrayValue;
        }
        i++;
    }
    return newArr;
};
exports.filter = filter;

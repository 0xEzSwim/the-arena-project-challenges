"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const array_length_1 = require("./array-length");
const find = (arr, cb) => {
    const arrayLength = (0, array_length_1.arrLength)(arr);
    let i = 0;
    let value;
    while (i < arrayLength) {
        if (cb(arr[i])) {
            value = arr[i];
            break;
        }
        i++;
    }
    return value;
};
exports.find = find;

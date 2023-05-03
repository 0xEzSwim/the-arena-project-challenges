"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOf = void 0;
const array_length_1 = require("./array-length");
const indexOf = (arr, elem) => {
    const arrayLength = (0, array_length_1.arrLength)(arr);
    let i = 0;
    while (i < arrayLength) {
        if (arr[i] === elem) {
            return i;
        }
        i++;
    }
    return -1;
};
exports.indexOf = indexOf;

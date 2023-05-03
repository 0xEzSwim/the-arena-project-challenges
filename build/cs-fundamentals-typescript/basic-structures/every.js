"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.every = void 0;
const array_length_1 = require("./array-length");
const every = (arr, cb) => {
    const arrayLength = (0, array_length_1.arrLength)(arr);
    let i = 0;
    while (i < arrayLength) {
        if (!cb(arr[i])) {
            return false;
        }
        i++;
    }
    return true;
};
exports.every = every;

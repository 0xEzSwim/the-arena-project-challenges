"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseNumbers = void 0;
const array_length_1 = require("./array-length");
const reverseNumbers = (numbers) => {
    let i = (0, array_length_1.arrLength)(numbers) - 1;
    let j = 0;
    let array = [];
    while (i >= 0) {
        array[j++] = numbers[i--];
    }
    return array;
};
exports.reverseNumbers = reverseNumbers;

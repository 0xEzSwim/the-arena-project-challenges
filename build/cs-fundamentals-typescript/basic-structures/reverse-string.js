"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = exports.arrayJoin = void 0;
const string_length_1 = require("./string-length");
const array_length_1 = require("./array-length");
const arrayJoin = (array) => {
    let string = '';
    let i = 0;
    while (i < (0, array_length_1.arrLength)(array)) {
        string += `${array[i++]}`;
    }
    return string;
};
exports.arrayJoin = arrayJoin;
const reverseString = (str) => {
    let i = (0, string_length_1.strLength)(str) - 1;
    let j = 0;
    let array = [];
    while (i >= 0) {
        array[j++] = str[i--];
    }
    return (0, exports.arrayJoin)(array);
};
exports.reverseString = reverseString;

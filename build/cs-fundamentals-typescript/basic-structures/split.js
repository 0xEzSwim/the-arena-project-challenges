"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
const string_length_1 = require("./string-length");
const split = (str) => {
    const stringLength = (0, string_length_1.strLength)(str);
    let array = [];
    let i = 0;
    while (i < stringLength) {
        array[i] = str[i];
        i++;
    }
    return array;
};
exports.split = split;

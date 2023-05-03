"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatN = void 0;
const reverse_string_1 = require("./reverse-string");
const string_length_1 = require("./string-length");
const concatN = (strA, strB, n) => {
    const stringBLength = (0, string_length_1.strLength)(strB);
    let i = 0;
    let j = (0, string_length_1.strLength)(strA);
    let newArr = [...strA];
    let shortesLength = n < stringBLength ? n : stringBLength;
    while (i < shortesLength) {
        newArr[j++] = strB[i++];
    }
    return (0, reverse_string_1.arrayJoin)(newArr);
};
exports.concatN = concatN;

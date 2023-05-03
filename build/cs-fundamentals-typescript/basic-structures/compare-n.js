"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareN = void 0;
const compareN = (strA, strB, n) => {
    let i = 0;
    let countDiff = 0;
    while (i < n) {
        countDiff += strA[i] !== strB[i] ? 1 : 0;
        i++;
    }
    return countDiff;
};
exports.compareN = compareN;

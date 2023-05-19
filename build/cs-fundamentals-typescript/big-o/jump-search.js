"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jumpSearch = void 0;
const jumpSearch = (arr, value) => {
    let jump = Math.floor(Math.sqrt(arr.length));
    let i = 0;
    let previous = i;
    while (arr[i] < value) {
        previous = i;
        i = i >= arr.length ? arr.length - 1 : i + jump;
    }
    while (i > previous) {
        if (arr[i] == value) {
            return value;
        }
        i--;
    }
    return;
};
exports.jumpSearch = jumpSearch;

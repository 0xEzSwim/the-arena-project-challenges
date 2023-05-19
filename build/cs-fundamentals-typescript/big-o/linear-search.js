"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
const linearSearch = (arr, predicate) => {
    let i = 0;
    while (i < arr.length) {
        if (predicate(arr[i])) {
            return arr[i];
        }
        i++;
    }
    return;
};
exports.linearSearch = linearSearch;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
const insertionSort = (arr, cmp) => {
    let copy = [...arr];
    let i = 1;
    while (i < copy.length) {
        let currentValue = copy[i];
        let j = i - 1;
        while (j >= 0 && cmp(copy[j], currentValue) > 0) {
            copy[j + 1] = copy[j];
            j--;
        }
        copy[j + 1] = currentValue;
        i++;
    }
    return copy;
};
exports.insertionSort = insertionSort;

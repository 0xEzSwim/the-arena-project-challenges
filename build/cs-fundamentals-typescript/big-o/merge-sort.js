"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
const merge = (left, right, cmp) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (cmp(left[0], right[0]) < 0) {
            sortedArr.push(left.shift());
        }
        else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
};
const mergeSort = (arr, cmp) => {
    if (arr.length < 2) {
        return [...arr];
    }
    let mid = Math.floor(arr.length / 2);
    let left = (0, exports.mergeSort)(arr.slice(0, mid), cmp);
    let right = (0, exports.mergeSort)(arr.slice(mid), cmp);
    return merge(left, right, cmp);
};
exports.mergeSort = mergeSort;

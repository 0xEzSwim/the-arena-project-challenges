"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
const binarySearch = (arr, value) => {
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] < value) {
        return (0, exports.binarySearch)(arr.slice(mid + 1), value);
    }
    else if (arr[mid] > value) {
        return (0, exports.binarySearch)(arr.slice(0, mid), value);
    }
    return arr[mid] == value ? value : undefined;
};
exports.binarySearch = binarySearch;

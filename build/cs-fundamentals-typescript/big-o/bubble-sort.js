"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (arr, cmp) => {
    let copy = [...arr];
    let wasSwaped = false;
    let i = copy.length - 1;
    while (i > 0) {
        wasSwaped = false;
        let j = 0;
        while (j < i) {
            const currentValue = copy[j];
            const nextValue = copy[j + 1];
            if (cmp(nextValue, currentValue) < 0) {
                [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
                wasSwaped = true;
            }
            j++;
        }
        i--;
        if (!wasSwaped) {
            break;
        }
    }
    return copy;
};
exports.bubbleSort = bubbleSort;

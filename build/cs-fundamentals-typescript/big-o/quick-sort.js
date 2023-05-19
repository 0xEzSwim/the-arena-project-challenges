"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
const swap = (items, firstIndex, secondIndex) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};
const partition = (items, startIndex, endIndex, cmp) => {
    let pivot = items[endIndex];
    let i = startIndex;
    let j = startIndex - 1;
    while (i <= endIndex) {
        if (cmp(items[i], pivot) <= 0) {
            j++;
            swap(items, i, j);
        }
        i++;
    }
    return j;
};
const quickSortRecursion = (items, startIndex, endIndex, cmp) => {
    if (endIndex <= startIndex) {
        return;
    }
    let pivotIndex = partition(items, startIndex, endIndex, cmp);
    quickSortRecursion(items, startIndex, pivotIndex - 1, cmp);
    quickSortRecursion(items, pivotIndex + 1, endIndex, cmp);
};
const quickSort = (items, cmp) => {
    let copyItems = [...items];
    quickSortRecursion(copyItems, 0, copyItems.length - 1, cmp);
    return copyItems;
};
exports.quickSort = quickSort;

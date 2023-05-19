import { CompareFn, SortFn } from ".";

const merge = <T>(left: T[], right: T[], cmp: CompareFn<T>): T[] => {
    let sortedArr = [];

    while (left.length && right.length) {
        if (cmp(left[0], right[0]) < 0) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right] as T[];
};

export const mergeSort: SortFn = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
  if (arr.length < 2) {
    return [...arr];
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort<T>(arr.slice(0, mid), cmp);
  let right = mergeSort<T>(arr.slice(mid), cmp);

  return merge<T>(left, right, cmp);
};
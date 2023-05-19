import { CompareFn, SortFn } from ".";

export const insertionSort: SortFn = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
    let copy: T[] = [...arr];

    let i: number = 1;
    while(i < copy.length) {
        let currentValue: T = copy[i];

        let j: number = i - 1;
        while(j >= 0 && cmp(copy[j], currentValue) > 0) {
            copy[j + 1] = copy[j]
            j--;
        }
        copy[j + 1] = currentValue;

        i++;
    }

    return copy;
};
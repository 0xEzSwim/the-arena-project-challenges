import { CompareFn, SortFn } from ".";

const swap = <T>(items: T[], firstIndex: number, secondIndex: number): void => {
    const temp: T = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

const partition = <T>(items: T[], startIndex: number, endIndex:number, cmp: CompareFn<T>): number => {
    let pivot: T = items[endIndex];
    let i: number = startIndex;
    let j: number = startIndex - 1;
    while(i <= endIndex) {
        if(cmp(items[i], pivot) <= 0) {
            j++;
            swap(items, i, j);
        }
        i++;
    }

    return j;
}

const quickSortRecursion = <T>(items: T[], startIndex: number, endIndex:number, cmp: CompareFn<T>): void => {
    if(endIndex <= startIndex) {
        return;
    }
    
    let pivotIndex: number = partition(items, startIndex, endIndex, cmp);
    quickSortRecursion<T>(items, startIndex, pivotIndex - 1, cmp);
    quickSortRecursion<T>(items, pivotIndex + 1, endIndex, cmp);
}

export const quickSort: SortFn = <T>(items: T[], cmp: CompareFn<T>): T[] => {
    let copyItems: T[] = [...items];
    quickSortRecursion(copyItems, 0, copyItems.length - 1, cmp);
    return copyItems;
}
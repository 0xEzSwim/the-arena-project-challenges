import { CompareFn, SortFn } from ".";

export const bubbleSort: SortFn = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
    let copy: T[] = [...arr];
    let wasSwaped: boolean = false;
    let i: number = copy.length - 1;

    while(i > 0) {
        wasSwaped = false;
        let j: number = 0;
        while(j < i) {
            const currentValue: T = copy[j];
            const nextValue: T = copy[j + 1];
            if(cmp(nextValue, currentValue) < 0) {
                [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
                wasSwaped = true;
            }
            j++;
        }
        i--;
        if(!wasSwaped) {
            break;
        }
    }

    return copy;
};
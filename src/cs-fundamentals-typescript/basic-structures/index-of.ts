import { arrLength } from "./array-length";

type IndexOfFn = (arr: any[], elem: any) => number;

export const indexOf: IndexOfFn = (arr: any[], elem: any): number => {
    const arrayLength: number = arrLength(arr);
    let i: number = 0;
    while(i < arrayLength) {
        if(arr[i] === elem) {
            return i;
        }
        i++;
    }
    return -1;
};
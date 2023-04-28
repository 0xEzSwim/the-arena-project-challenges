import { arrLength } from "./array-length";

type IndexOfFn = (arr: any[], elem: any) => number;

export const indexOf: IndexOfFn = (arr: any[], elem: any): number => {
    const arrayLength = arrLength(arr);
    let i: number = 0;
    while(i < arrayLength) {
        if(arr[i] === elem) {
            break;
        }
        i++;
    }
    return i == arrayLength ? -1 : i;
};
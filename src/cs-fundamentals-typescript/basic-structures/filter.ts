import { arrLength } from "./array-length";

type CallbackFn = (elem: any) => boolean;
type FilterFn = (arr: any[], cb: CallbackFn) => any[];

export const filter: FilterFn = (arr: any[], cb: CallbackFn): any[] => {
    const arrayLength: number = arrLength(arr);
    let i: number = 0;
    let j: number = 0;
    let newArr: any[] = [];
    while(i < arrayLength) {
        let arrayValue = arr[i];
        if(cb(arrayValue)) {
            newArr[j++] = arrayValue;
        }
        i++;
    }
    return newArr;
};
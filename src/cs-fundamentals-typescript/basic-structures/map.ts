import { arrLength } from "./array-length";

type CallbackFn = (elem: any) => any;
type MapFn = (arr: any[], cb: CallbackFn) => any[];

export const map: MapFn = (arr: any[], cb: CallbackFn): any[] => {
    const arrayLength = arrLength(arr);
    let i: number = 0;
    let newArr: any[] = [];
    while(i < arrayLength) {
        newArr[i] = cb(arr[i++]);
    }
    return newArr;
};
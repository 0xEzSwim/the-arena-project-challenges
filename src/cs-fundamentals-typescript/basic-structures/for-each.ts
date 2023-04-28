import { arrLength } from "./array-length";

type CallbackFn = (elem: any) => any;
type ForEachFn = (arr: any[], cb: CallbackFn) => void;

export const forEach: ForEachFn = (arr: any[], cb: CallbackFn) => {
    const arrayLength = arrLength(arr);
    let i: number = 0;
    while(i < arrayLength) {
        cb(arr[i++]);
    }
};
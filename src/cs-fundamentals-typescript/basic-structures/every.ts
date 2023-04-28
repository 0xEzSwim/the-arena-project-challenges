import { arrLength } from "./array-length";

type CallbackFn = (elem: any) => boolean;
type EveryFn = (arr: any[], cb: CallbackFn) => boolean;

export const every: EveryFn = (arr: any[], cb: CallbackFn): boolean => {
    const arrayLength: number = arrLength(arr);
    let i: number = 0;
    while(i < arrayLength) {
        if(!cb(arr[i])) {
            return false;
        }
        i++;
    }
    return true;
};
import { arrLength } from "./array-length";

type CallbackFn = (elem: any) => boolean;
type FindFn = (arr: any[], cb: CallbackFn) => any;

export const find: FindFn = (arr: any[], cb: CallbackFn): any => {
    const arrayLength: number = arrLength(arr);
    let i: number = 0;
    let value: any;
    while(i < arrayLength) {
        if(cb(arr[i])) {
            value = arr[i];
            break;
        }
        i++;
    }
    return value;
};
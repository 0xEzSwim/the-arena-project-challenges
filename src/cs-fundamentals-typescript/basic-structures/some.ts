import { arrLength } from "./array-length";

type CallbackFn = (elem: any) => boolean
type SomeFn = (arr: any[], cb: CallbackFn) => boolean

export const some: SomeFn = (arr: any[], cb: CallbackFn): boolean => {
    const arrayLength: number = arrLength(arr);
    let i: number = 0;
    let result: boolean = false;
    while(i < arrayLength) {
        if(cb(arr[i])) {
            result = true;
            break;
        }
        i++;
    }
    return result;
}
import { strLength } from "./string-length";

type SplitFn = (str: string) => string[];

export const split: SplitFn = (str: string): string[] => {
    const stringLength: number = strLength(str);
    let array: string[] = [];
    let i: number = 0;
    while(i < stringLength) {
        array[i] = str[i];
        i++;
    }
    return array;
};
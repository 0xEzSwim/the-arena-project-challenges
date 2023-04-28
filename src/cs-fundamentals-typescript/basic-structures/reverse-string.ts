import { strLength } from "./string-length";
import { arrLength } from "./array-length";

type ReverseStringFn = (str: string) => string;

export const arrayJoin = (array: string[]): string => {
    let string: string = '';
    let i: number = 0;
    while (i < arrLength(array)) {
        string += `${array[i++]}`;
    }

    return string;
};

export const reverseString: ReverseStringFn = (str: string): string => {
    let i: number = strLength(str) - 1;
    let j: number = 0;
    let array: string[] = [];
    while(i >= 0) {
        array[j++] = str[i--];
    }

    return arrayJoin(array);
};
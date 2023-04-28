import { arrLength } from "./array-length";

type ReverseNumbersFn = (numbers: number[]) => number[];

export const reverseNumbers: ReverseNumbersFn = (numbers: number[]): number[] => {
    let i: number = arrLength(numbers) - 1;
    let j: number = 0;
    let array: number[] = [];
    while(i >= 0 ) {
        array[j++] = numbers[i--];
    }
    return array;
};
type ArrLengthFn = (arr: number[]) => number;

export const arrLength: ArrLengthFn = (arr: number[]): number => {
    let i: number = 0;
    while (typeof arr[i] !== 'undefined') {
        i++;
    }
    return i;
};
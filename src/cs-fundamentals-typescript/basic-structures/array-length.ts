type ArrLengthFn = (arr: any[]) => number;

export const arrLength: ArrLengthFn = (arr: any[]): number => {
    let i: number = 0;
    while (typeof arr[i] !== 'undefined') {
        i++;
    }
    return i;
};
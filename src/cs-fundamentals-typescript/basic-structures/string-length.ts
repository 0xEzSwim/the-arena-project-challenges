type StrLengthFn = (str: string) => number;

export const strLength: StrLengthFn = (str: string): number => {
    let i: number = 0;
    while (typeof str[i] !== 'undefined') {
        i++;
    }
    return i;
};
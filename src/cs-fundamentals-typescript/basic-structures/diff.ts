import { indexOf } from "./index-of";

type DiffFn = (arrA: number[], arrB: number[]) => number[];

export const diff: DiffFn = (arrA: number[], arrB: number[]): number[] => {
    let newArr: number[] = arrA.filter(a => indexOf(arrB, a) === -1);
    return newArr;
};

type CompareNFn = (strA: string, strB: string, n: number) => number;

export const compareN: CompareNFn = (strA: string, strB: string, n: number): number => {
    let i: number = 0;
    let countDiff: number = 0;
    while(i < n) {
        countDiff += strA[i] !== strB[i] ? 1 : 0;
        i++;
    }
    return countDiff;
};


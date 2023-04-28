import { arrayJoin } from "./reverse-string";
import { strLength } from "./string-length";

type ConcatNFn = (strA: string, strB: string, n: number) => string;

export const concatN: ConcatNFn = (strA: string, strB: string, n: number): string => {
    const stringBLength: number = strLength(strB);
    let i: number = 0;
    let j: number =  strLength(strA);
    let newArr: string[] = [...strA];
    let shortesLength: number = n < stringBLength ? n : stringBLength;
    while(i < shortesLength) {
        newArr[j++] = strB[i++];
    }
    return arrayJoin(newArr);
};
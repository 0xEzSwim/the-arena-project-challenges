type AtoiFn = (str: string) => number;

export const atoi: AtoiFn = (str: string): number => {
    let res: number = 0;
    let sign: number = 1;
    let i: number = 0;
    if (str[0] == '-') {
        sign = -1;
        i++;
    }
    if (str[0] == '+') {
        sign = 1;
        i++;
    }
    while(i < str.length){
        if(str[i].charCodeAt(0) < '0'.charCodeAt(0) || str[i].charCodeAt(0) > '9'.charCodeAt(0)) {
            res = NaN;
            break;
        }
        res = res * 10 + str[i].charCodeAt(0) - '0'.charCodeAt(0);
        i++;
    }
    return sign * res;
};
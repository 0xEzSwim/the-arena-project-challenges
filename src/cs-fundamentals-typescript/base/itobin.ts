type ItobinFn = (nb: number) => string;

export const itobin : ItobinFn = (nb: number): string => {
    const asciiNum: { [id: number] : number; } = {
        0: 48,
        1: 49
    };
    let res: string = '';
    let isNegative: boolean = false;
    if(nb < 0 || 1/nb === -Infinity) {
        isNegative = true;
    }
    nb = isNegative ? nb * -1 : nb;
    let array: number[] = [];
    if(nb == 0) {
        res = String.fromCharCode(asciiNum[0])
    } else {
        while (nb > 0) {
            let remainder = nb % 2;
            nb = Math.floor(nb/2);
            array.unshift(remainder);
            if(nb < 0) {
                array.unshift(nb);
            }
        }
        let i: number = 0;
        while(i < array.length) {
            res = res + String.fromCharCode(asciiNum[array[i]]);
            i++;
        }
    }
    return isNegative ? '-' + res : res;
};


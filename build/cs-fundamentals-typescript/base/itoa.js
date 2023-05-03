"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itoa = void 0;
const itoa = (nb) => {
    const asciiNum = {
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57
    };
    let res = '';
    let isNegative = false;
    if (nb < 0 || 1 / nb === -Infinity) {
        isNegative = true;
    }
    nb = isNegative ? nb * -1 : nb;
    let array = [];
    if (nb == 0) {
        res = String.fromCharCode(asciiNum[0]);
    }
    else {
        while (nb > 9) {
            let remainder = nb % 10;
            nb = Math.floor(nb / 10);
            array.unshift(remainder);
            if (nb < 9) {
                array.unshift(nb);
            }
        }
        let i = 0;
        while (i < array.length) {
            res = res + String.fromCharCode(asciiNum[array[i]]);
            i++;
        }
    }
    return isNegative ? '-' + res : res;
};
exports.itoa = itoa;

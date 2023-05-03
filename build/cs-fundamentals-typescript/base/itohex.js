"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itohex = void 0;
const itohex = (nb) => {
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
        9: 57,
        10: 65,
        11: 66,
        12: 67,
        13: 68,
        14: 69,
        15: 70,
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
        while (nb > 0) {
            let remainder = nb % 16;
            nb = Math.floor(nb / 16);
            array.unshift(remainder);
        }
        let i = 0;
        while (i < array.length) {
            res = res + String.fromCharCode(asciiNum[array[i]]);
            i++;
        }
    }
    return isNegative ? '-' + res : res;
};
exports.itohex = itohex;

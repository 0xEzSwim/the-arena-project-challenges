"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itobin = void 0;
const itobin = (nb) => {
    const asciiNum = {
        0: 48,
        1: 49
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
            let remainder = nb % 2;
            nb = Math.floor(nb / 2);
            array.unshift(remainder);
            if (nb < 0) {
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
exports.itobin = itobin;

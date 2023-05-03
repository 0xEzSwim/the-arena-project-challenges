"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itoji = void 0;
/**
 * Write a function itoji that converts a number into its representation in the following octal base: 👍🐕🥹💕🎁😊🏡✨.
 * @param nb
 * @returns emoji string
 */
const itoji = (nb) => {
    const baseNum = {
        0: '👍',
        1: '🐕',
        2: '🥹',
        3: '💕',
        4: '🎁',
        5: '😊',
        6: '🏡',
        7: '✨'
    };
    let res = '';
    let isNegative = false;
    if (nb < 0 || 1 / nb === -Infinity) {
        isNegative = true;
    }
    nb = isNegative ? nb * -1 : nb;
    let array = [];
    if (nb == 0) {
        res = baseNum[0];
    }
    else {
        while (nb > 0) {
            let remainder = nb % 8;
            nb = Math.floor(nb / 8);
            array.unshift(remainder);
        }
        let i = 0;
        while (i < array.length) {
            res = res + baseNum[array[i]];
            i++;
        }
    }
    return isNegative ? '-' + res : res;
};
exports.itoji = itoji;

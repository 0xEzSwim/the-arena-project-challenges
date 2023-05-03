"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursivePower = exports.iterativePower = void 0;
const iterativePower = (nb, power) => {
    let i = 0;
    let powerResult = 1;
    while (i < power) {
        powerResult *= nb;
        i++;
    }
    return powerResult;
};
exports.iterativePower = iterativePower;
const recursivePower = (nb, power) => {
    return power > 0 ? nb * (0, exports.iterativePower)(nb, power - 1) : 1;
};
exports.recursivePower = recursivePower;

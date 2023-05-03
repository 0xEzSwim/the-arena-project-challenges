"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveFactorial = exports.iterativeFactorial = void 0;
const iterativeFactorial = (nb) => {
    let i = 1;
    let factorial = 1;
    while (i <= nb) {
        factorial *= i++;
    }
    return factorial;
};
exports.iterativeFactorial = iterativeFactorial;
const recursiveFactorial = (nb) => {
    return nb > 0 ? nb * (0, exports.recursiveFactorial)(nb - 1) : 1;
};
exports.recursiveFactorial = recursiveFactorial;

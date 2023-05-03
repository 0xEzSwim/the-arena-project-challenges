"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
/**
 * @param n - The number of sequence
 * @returns The value of the nth term of the Fibonacci sequence, where n >= 1
 */
const fibonacci = (n) => {
    return n > 2 ? (0, exports.fibonacci)(n - 1) + (0, exports.fibonacci)(n - 2) : n - 1;
};
exports.fibonacci = fibonacci;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diff = void 0;
const index_of_1 = require("./index-of");
const diff = (arrA, arrB) => {
    let newArr = arrA.filter(a => (0, index_of_1.indexOf)(arrB, a) === -1);
    return newArr;
};
exports.diff = diff;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = void 0;
const array_length_1 = require("./array-length");
const push = (arr, item) => {
    arr[(0, array_length_1.arrLength)(arr)] = item;
};
exports.push = push;

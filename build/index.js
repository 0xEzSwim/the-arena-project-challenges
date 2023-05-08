"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./cs-fundamentals-typescript/base");
const basic_structures_1 = require("./cs-fundamentals-typescript/basic-structures");
const file_system_manipulation_1 = require("./cs-fundamentals-typescript/file-system-manipulation");
const iteration_recursion_1 = require("./cs-fundamentals-typescript/iteration-recursion");
const linked_list_1 = require("./cs-fundamentals-typescript/linked-list");
const string = 'Hello project arena!';
const array = [1, 2, 3];
(0, basic_structures_1.printString)(string);
(0, basic_structures_1.printNumber)((0, basic_structures_1.arrLength)(array));
(0, basic_structures_1.printString)('');
(0, basic_structures_1.printNumber)((0, basic_structures_1.strLength)(string));
(0, basic_structures_1.printString)('');
console.log('string split:', (0, basic_structures_1.split)(string));
console.log('reverse string:', (0, basic_structures_1.reverseString)(string));
(0, basic_structures_1.push)(array, 4);
console.log('push array:', array);
console.log('reverse numbers:', (0, basic_structures_1.reverseNumbers)(array));
console.log('indexOf 5:', (0, basic_structures_1.indexOf)(array, 5));
(0, basic_structures_1.forEach)(array, basic_structures_1.printNumber);
(0, basic_structures_1.printString)('');
console.log('map * 2:', (0, basic_structures_1.map)(array, (elem) => (elem * 2)));
console.log('filter > 2:', (0, basic_structures_1.filter)(array, (elem) => (elem > 2)));
console.log('find 2:', (0, basic_structures_1.find)(array, (elem) => (elem === 2)));
console.log('some 2:', (0, basic_structures_1.some)(array, (elem) => (elem === 2)));
console.log('every 2:', (0, basic_structures_1.every)(array, (elem) => (elem === 2)));
console.log('diff :', (0, basic_structures_1.diff)(array, [1, 4, 5]));
console.log('isAlpha :', (0, basic_structures_1.isAlpha)(string));
console.log('concat 100 :', (0, basic_structures_1.concatN)(string, "Hello world!", 3));
console.log('compare 7 :', (0, basic_structures_1.compareN)(string, "Hello world!", 7));
console.log('iterative factorial 6 :', (0, iteration_recursion_1.iterativeFactorial)(6));
console.log('recursive factorial 6 :', (0, iteration_recursion_1.recursiveFactorial)(6));
console.log('iterative factorial 2^3 :', (0, iteration_recursion_1.iterativePower)(2, 3));
console.log('recursive factorial 2^3 :', (0, iteration_recursion_1.recursivePower)(2, 3));
console.log('fibonacci :', (0, iteration_recursion_1.fibonacci)(10));
console.log('the number of boxes to go through before exiting the corridor:', (0, iteration_recursion_1.exitTheCorridor)([0, 0, 10, 0, 0, 0, 8, 0, 0, 12, 0, 5, 0]));
const runway = [
    [0, 0],
    [0, 0],
    [0, 0],
    [1, 0],
    [0, 0],
    [0, 0],
];
console.log("the number of steps sideways you had to take to avoid the warriors:", (0, iteration_recursion_1.avoidTheWarriors)(runway));
const matrix = [
    [0, 1, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
];
console.log("the shortest path is :", (0, iteration_recursion_1.findShortestPath)([1, 0], [3, 4], matrix));
console.log("Convert string to number:", (0, base_1.atoi)('1213a'));
console.log("Convert number to string:", (0, base_1.itoa)(-0));
console.log("Convert number to binary:", (0, base_1.itobin)(10));
console.log("Convert number to hexa:", (0, base_1.itohex)(-15));
console.log("Convert number to emojies:", (0, base_1.itoji)(-36));
console.log("README.md:", (0, file_system_manipulation_1.readFileSync)("./README.md"));
const filename = 'large-string.txt';
const data = 'The Arena Project\n'.repeat(100000);
(0, file_system_manipulation_1.writeFileSync)(filename, Buffer.from(data));
let single = (0, linked_list_1.llCreateLink)(10);
let second = (0, linked_list_1.llCreateLink)(1);
let first = (0, linked_list_1.llUnshift)(second, 0);
let third = (0, linked_list_1.llAddAfter)(second, 2);
let fourth = (0, linked_list_1.llPush)(null, 3);
let fith = (0, linked_list_1.llPush)(fourth, 4);
let sixth = (0, linked_list_1.llPush)(fourth, 5);
(0, linked_list_1.llPrint)(single, "Single linked list:");
(0, linked_list_1.llPrint)(first, "First half of linked list:");
(0, linked_list_1.llPrint)(fourth, "Second half of linked list:");
(0, linked_list_1.llPrint)((0, linked_list_1.llMerge)(first, fourth), "Merge of linked list:");
(0, linked_list_1.llPrint)((0, linked_list_1.llUltimerge)(fourth, single), "Ultimerge of linked list:");

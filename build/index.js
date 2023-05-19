"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./cs-fundamentals-typescript/base");
const basic_structures_1 = require("./cs-fundamentals-typescript/basic-structures");
const big_o_1 = require("./cs-fundamentals-typescript/big-o");
const binary_tree_1 = require("./cs-fundamentals-typescript/binary-tree");
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
/**
 * 8
 * |___22
 * |   |___24
 * |   |   |___38
 * |   |___10
 * |   |   |___20
 * |___2
 * |   |___3
 * |   |___1
 * |   |   |___0
 *
 */
console.log("\n-- Root --");
let root = (0, binary_tree_1.createNode)(8);
root = (0, binary_tree_1.insertBalanced)(root, 2);
root = (0, binary_tree_1.insertBalanced)(root, 1);
root = (0, binary_tree_1.insertBalanced)(root, 0);
root = (0, binary_tree_1.insertBalanced)(root, 3);
root = (0, binary_tree_1.insertBalanced)(root, 22);
root = (0, binary_tree_1.insertBalanced)(root, 10);
root = (0, binary_tree_1.insertBalanced)(root, 24);
root = (0, binary_tree_1.insertBalanced)(root, 38);
root = (0, binary_tree_1.insertBalanced)(root, 20);
(0, binary_tree_1.printTree)(root);
console.log("Root height:", (0, binary_tree_1.getHeight)(root));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root));
console.log("Right node balance factor:", (0, binary_tree_1.getBalanceFactor)(root.right));
console.log("Left node balance factor:", (0, binary_tree_1.getBalanceFactor)(root.left));
console.log("\n");
/**
 * 1
 * |___2
 * |   |___3
 *
 */
console.log("\n-- RotateLeft --");
let root2 = (0, binary_tree_1.createNode)(1);
root2 = (0, binary_tree_1.insert)(root2, 2);
root2 = (0, binary_tree_1.insert)(root2, 3);
(0, binary_tree_1.printTree)(root2);
console.log();
console.log("Root height:", (0, binary_tree_1.getHeight)(root2));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root2));
console.log("Right node balance factor:", (0, binary_tree_1.getBalanceFactor)(root2.right));
console.log("Left node balance factor:", (0, binary_tree_1.getBalanceFactor)(root2.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *
 */
root2 = (0, binary_tree_1.rotateLeft)(root2);
(0, binary_tree_1.printTree)(root2);
console.log("Root height:", (0, binary_tree_1.getHeight)(root2));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root2));
/**
 * 3
 * |___2
 * |   |___1
 *
 */
console.log("\n-- RotateRight --");
let root3 = (0, binary_tree_1.createNode)(3);
root3 = (0, binary_tree_1.insert)(root3, 2);
root3 = (0, binary_tree_1.insert)(root3, 1);
(0, binary_tree_1.printTree)(root3);
console.log("Root height:", (0, binary_tree_1.getHeight)(root3));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root3));
console.log("Right node balance factor:", (0, binary_tree_1.getBalanceFactor)(root3.right));
console.log("Left node balance factor:", (0, binary_tree_1.getBalanceFactor)(root3.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *
 */
root3 = (0, binary_tree_1.rotateRight)(root3);
(0, binary_tree_1.printTree)(root3);
console.log("Root height:", (0, binary_tree_1.getHeight)(root3));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root3));
/**
 * 1
 * |___3
 * |   |___2
 *
 */
console.log("\n-- RotateRightLeft --");
let root4 = (0, binary_tree_1.createNode)(1);
root4 = (0, binary_tree_1.insert)(root4, 3);
root4 = (0, binary_tree_1.insert)(root4, 2);
(0, binary_tree_1.printTree)(root4);
console.log("Root height:", (0, binary_tree_1.getHeight)(root4));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root4));
console.log("Right node balance factor:", (0, binary_tree_1.getBalanceFactor)(root4.right));
console.log("Left node balance factor:", (0, binary_tree_1.getBalanceFactor)(root4.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *
 */
root4 = (0, binary_tree_1.rotateRightLeft)(root4);
(0, binary_tree_1.printTree)(root4);
console.log("Root height:", (0, binary_tree_1.getHeight)(root4));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root4));
/**
 * 3
 * |___1
 * |   |___2
 *
 */
console.log("\n-- RotateLeftRight --");
let root5 = (0, binary_tree_1.createNode)(3);
root5 = (0, binary_tree_1.insert)(root5, 1);
root5 = (0, binary_tree_1.insert)(root5, 2);
(0, binary_tree_1.printTree)(root5);
console.log("Root height:", (0, binary_tree_1.getHeight)(root5));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root5));
console.log("Right node balance factor:", (0, binary_tree_1.getBalanceFactor)(root5.right));
console.log("Left node balance factor:", (0, binary_tree_1.getBalanceFactor)(root5.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *
 */
root5 = (0, binary_tree_1.rotateLeftRight)(root5);
(0, binary_tree_1.printTree)(root5);
console.log("Root height:", (0, binary_tree_1.getHeight)(root5));
console.log("Balance factor:", (0, binary_tree_1.getBalanceFactor)(root5));
console.log("\n");
const arrayString = [
    "HeLlo",
    ".23AbCdFH.-2",
    "world",
    "*@/#",
    "hello",
    "WoRlD",
    ""
];
const arrayNum = [1, 2, 3, 4, 5, 6, 8, 9];
console.log('Array BEFORE sort :', arrayString);
console.log('ASC Array :', arrayNum);
const insertionArr = (0, big_o_1.insertionSort)(arrayString, (a, b) => a.localeCompare(b));
console.log('Insertion sorted array :', insertionArr);
const bubbleArr = (0, big_o_1.bubbleSort)(arrayString, (a, b) => a.localeCompare(b));
console.log('Bubble sorted array :', bubbleArr);
const mergeArr = (0, big_o_1.mergeSort)(arrayString, (a, b) => a.localeCompare(b));
console.log('Merge sorted array :', mergeArr);
const quickArr = (0, big_o_1.quickSort)(arrayString, (a, b) => b.localeCompare(a));
console.log('Quick sorted array :', quickArr);
const linearSearchResult = (0, big_o_1.linearSearch)(arrayString, (element) => element === "HeLlo");
console.log('Linear search result :', linearSearchResult);
const jumpSearchResult = (0, big_o_1.jumpSearch)(arrayNum, 2);
console.log('Jump search result :', jumpSearchResult);
const binarySearchResult = (0, big_o_1.binarySearch)(arrayNum, 8);
console.log('Binary search result :', binarySearchResult);
console.log('Array AFTER sort  :', arrayString);

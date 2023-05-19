import { 
    atoi, 
    itoa, 
    itobin,
    itohex,
    itoji
} from "./cs-fundamentals-typescript/base";
import { 
    printString, 
    printNumber,
    arrLength,
    strLength,
    split,
    reverseString,
    push,
    reverseNumbers,
    indexOf,
    forEach,
    map,
    filter,
    find,
    some,
    every,
    diff,
    isAlpha,
    concatN,
    compareN
} from "./cs-fundamentals-typescript/basic-structures";
import { 
    binarySearch,
    bubbleSort,
    insertionSort,
    jumpSearch,
    linearSearch,
    mergeSort,
    quickSort 
} from "./cs-fundamentals-typescript/big-o";
import { 
    BNode,
    createNode,
    getBalanceFactor,
    getHeight,
    insert,
    insertBalanced,
    printTree,
    rotateLeft,
    rotateLeftRight,
    rotateRight,
    rotateRightLeft 
} from "./cs-fundamentals-typescript/binary-tree";
import { 
    readFileSync,
    writeFileSync 
} from "./cs-fundamentals-typescript/file-system-manipulation";
import { 
    iterativeFactorial,
    recursiveFactorial,
    iterativePower,
    recursivePower,
    fibonacci,
    exitTheCorridor,
    avoidTheWarriors,
    Runway,
    findShortestPath,
    Matrix
} from "./cs-fundamentals-typescript/iteration-recursion";
import { 
    MessageRouterCipher,
    MessageRouterDecoder,
    MessageRouterEncoder 
} from "./cs-fundamentals-typescript/jwt";
import { 
    Link, 
    llAddAfter, 
    llCreateLink, 
    llUnshift,
    llPush,
    llPrint,
    llMerge,
    llUltimerge
} from "./cs-fundamentals-typescript/linked-list";


const string: string = 'Hello project arena!';
const array: number[] = [1, 2, 3];
printString(string);
printNumber(arrLength(array));
printString('');
printNumber(strLength(string));
printString('');
console.log('string split:', split(string));
console.log('reverse string:', reverseString(string));
push(array, 4);
console.log('push array:', array);
console.log('reverse numbers:', reverseNumbers(array));
console.log('indexOf 5:', indexOf(array, 5));
forEach(array, printNumber);
printString('');
console.log('map * 2:', map(array, (elem) => (elem * 2)));
console.log('filter > 2:', filter(array, (elem) => (elem > 2)));
console.log('find 2:', find(array, (elem) => (elem === 2)));
console.log('some 2:', some(array, (elem) => (elem === 2)));
console.log('every 2:', every(array, (elem) => (elem === 2)));
console.log('diff :', diff(array, [1, 4, 5]));
console.log('isAlpha :', isAlpha(string));
console.log('concat 100 :', concatN(string, "Hello world!", 3));
console.log('compare 7 :', compareN(string, "Hello world!", 7));
console.log('iterative factorial 6 :', iterativeFactorial(6));
console.log('recursive factorial 6 :', recursiveFactorial(6));
console.log('iterative factorial 2^3 :', iterativePower(2, 3));
console.log('recursive factorial 2^3 :', recursivePower(2, 3));
console.log('fibonacci :', fibonacci(10));
console.log('the number of boxes to go through before exiting the corridor:', exitTheCorridor([0, 0, 10, 0, 0, 0, 8, 0, 0, 12, 0, 5, 0]));
const runway: Runway = [
    [0, 0],
    [0, 0],
    [0, 0],
    [1, 0],
    [0, 0],
    [0, 0],
];
console.log("the number of steps sideways you had to take to avoid the warriors:", avoidTheWarriors(runway));
const matrix: Matrix = [
	[0,1,1,0,1],
	[0,0,1,0,1],
	[0,0,1,1,1],
	[0,0,1,0,1],
	[0,0,1,1,1],
]
console.log("the shortest path is :", findShortestPath([1, 0], [3, 4], matrix));
console.log("Convert string to number:", atoi('1213a'));
console.log("Convert number to string:", itoa(-0));
console.log("Convert number to binary:", itobin(10));
console.log("Convert number to hexa:", itohex(-15));
console.log("Convert number to emojies:", itoji(-36));

console.log("README.md:", readFileSync("./README.md"));
const filename = 'large-string.txt';
const data = 'The Arena Project\n'.repeat(100000);
writeFileSync(filename, Buffer.from(data));

let single: Link<number> = llCreateLink(10);
let second: Link<number> = llCreateLink(1);
let first: Link<number> = llUnshift(second, 0);
let third: Link<number> = llAddAfter(second, 2);
let fourth: Link<number> = llPush(null, 3);
let fith: Link<number> = llPush(fourth, 4);
let sixth: Link<number> = llPush(fourth, 5);
llPrint(single, "Single linked list:");
llPrint(first, "First half of linked list:");
llPrint(fourth, "Second half of linked list:");
llPrint(llMerge(first, fourth), "Merge of linked list:");
llPrint(llUltimerge(fourth, single), "Ultimerge of linked list:");
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
let root: BNode = createNode(8);
root = insertBalanced(root, 2);
root = insertBalanced(root, 1);
root = insertBalanced(root, 0);
root = insertBalanced(root, 3);
root = insertBalanced(root, 22);
root = insertBalanced(root, 10);
root = insertBalanced(root, 24);
root = insertBalanced(root, 38);
root = insertBalanced(root, 20);
printTree(root);
console.log("Root height:", getHeight(root));
console.log("Balance factor:", getBalanceFactor(root));
console.log("Right node balance factor:", getBalanceFactor(root.right));
console.log("Left node balance factor:", getBalanceFactor(root.left));
console.log("\n");


/**
 * 1
 * |___2
 * |   |___3
 *  
 */
console.log("\n-- RotateLeft --");
let root2: BNode = createNode(1);
root2 = insert(root2, 2);
root2 = insert(root2, 3);
printTree(root2);
console.log();
console.log("Root height:", getHeight(root2));
console.log("Balance factor:", getBalanceFactor(root2));
console.log("Right node balance factor:", getBalanceFactor(root2.right));
console.log("Left node balance factor:", getBalanceFactor(root2.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *  
 */
root2 = rotateLeft(root2);
printTree(root2);
console.log("Root height:", getHeight(root2));
console.log("Balance factor:", getBalanceFactor(root2));
/**
 * 3
 * |___2
 * |   |___1
 *  
 */
console.log("\n-- RotateRight --");
let root3: BNode = createNode(3);
root3 = insert(root3, 2);
root3 = insert(root3, 1);
printTree(root3);
console.log("Root height:", getHeight(root3));
console.log("Balance factor:", getBalanceFactor(root3));
console.log("Right node balance factor:", getBalanceFactor(root3.right));
console.log("Left node balance factor:", getBalanceFactor(root3.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *  
 */
root3 = rotateRight(root3);
printTree(root3);
console.log("Root height:", getHeight(root3));
console.log("Balance factor:", getBalanceFactor(root3));
/**
 * 1
 * |___3
 * |   |___2
 *  
 */
console.log("\n-- RotateRightLeft --");
let root4: BNode = createNode(1);
root4 = insert(root4, 3);
root4 = insert(root4, 2);
printTree(root4);
console.log("Root height:", getHeight(root4));
console.log("Balance factor:", getBalanceFactor(root4));
console.log("Right node balance factor:", getBalanceFactor(root4.right));
console.log("Left node balance factor:", getBalanceFactor(root4.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *  
 */
root4 = rotateRightLeft(root4);
printTree(root4);
console.log("Root height:", getHeight(root4));
console.log("Balance factor:", getBalanceFactor(root4));
/**
 * 3
 * |___1
 * |   |___2
 *  
 */
console.log("\n-- RotateLeftRight --");
let root5: BNode = createNode(3);
root5 = insert(root5, 1);
root5 = insert(root5, 2);
printTree(root5);
console.log("Root height:", getHeight(root5));
console.log("Balance factor:", getBalanceFactor(root5));
console.log("Right node balance factor:", getBalanceFactor(root5.right));
console.log("Left node balance factor:", getBalanceFactor(root5.left));
console.log();
/**
 * 2
 * |___3
 * |___1
 *  
 */
root5 = rotateLeftRight(root5);
printTree(root5);
console.log("Root height:", getHeight(root5));
console.log("Balance factor:", getBalanceFactor(root5));
console.log("\n");

const arrayString: string[] = [
    "HeLlo",
    ".23AbCdFH.-2",
    "world",
    "*@/#",
    "hello",
    "WoRlD",
    ""
];
const arrayNum: number[] = [1, 2, 3, 4, 5, 6, 8, 9];
console.log('Array BEFORE sort :', arrayString);
console.log('ASC Array :', arrayNum);
const insertionArr: string[] = insertionSort<string>(arrayString, (a: string, b: string) => a.localeCompare(b));
console.log('Insertion sorted array :', insertionArr);
const bubbleArr: string[] = bubbleSort<string>(arrayString, (a: string, b: string) => a.localeCompare(b));
console.log('Bubble sorted array :', bubbleArr);
const mergeArr: string[] = mergeSort<string>(arrayString, (a: string, b: string) => a.localeCompare(b));
console.log('Merge sorted array :', mergeArr);
const quickArr: string[] = quickSort<string>(arrayString, (a: string, b: string) => b.localeCompare(a));
console.log('Quick sorted array :', quickArr);
const linearSearchResult: string | undefined = linearSearch<string>(arrayString, (element: string) => element ===  "HeLlo");
console.log('Linear search result :', linearSearchResult);
const jumpSearchResult: number | undefined = jumpSearch(arrayNum, 2);
console.log('Jump search result :', jumpSearchResult);
const binarySearchResult: number | undefined = binarySearch(arrayNum, 8);
console.log('Binary search result :', binarySearchResult);
console.log('Array AFTER sort  :', arrayString);

const encodeRouter = new MessageRouterEncoder();
const decodeRouter = new MessageRouterDecoder();

const string1: string = 'I have 2 apples';
const string1Encode: string = encodeRouter.encode(string1);
console.log(`\n` + `Original`.padEnd(11), string1);
console.log(`Expected`.padEnd(11), `I have NUM(2) apples`);
console.log(`Encoded`.padEnd(11), string1Encode);
console.log(`Decoded`.padEnd(11), decodeRouter.decode(string1Encode));

const string2: string = 'I have 22 apples and 3 oranges.';
const string2Encode: string = encodeRouter.encode(string2);
console.log(`\n` + `Original`.padEnd(11), string2);
console.log(`Expected`.padEnd(11), `I have NUM(22) apples and NUM(3) oranges%2e`);
console.log(`Encoded`.padEnd(11), string2Encode);
console.log(`Decoded`.padEnd(11), decodeRouter.decode(string2Encode));

const string3: string = '4 - +8 = -4';
const string3Encode: string = encodeRouter.encode(string3);
console.log(`\n` + `Original`.padEnd(11), string3);
console.log(`Expected`.padEnd(11), `NUM(4) %2d NUM(8) %3d NUM(-4)`);
console.log(`Encoded`.padEnd(11), string3Encode);
console.log(`Decoded`.padEnd(11), decodeRouter.decode(string3Encode));

const string4: string = 'I already sent a message to julius@thearenaproject.co 2 days ago!';
const string4Encode: string = encodeRouter.encode(string4);
console.log(`\n` + `Original`.padEnd(11), string4);
console.log(`Expected`.padEnd(11), `I already sent a message to julius%40thearenaproject%2eco NUM(2) days ago%21`);
console.log(`Encoded`.padEnd(11), string4Encode);
console.log(`Decoded`.padEnd(11), decodeRouter.decode(string4Encode));

const string5: string = '-101-23-34-234-345';
const string5Encode: string = encodeRouter.encode(string5);
console.log(`\n` + `Original`.padEnd(11), string5);
console.log(`Expected`.padEnd(11), `NUM(-101)NUM(-23)NUM(-34)NUM(-234)NUM(-345)`);
console.log(`Encoded`.padEnd(11), string5Encode);
console.log(`Decoded`.padEnd(11), decodeRouter.decode(string5Encode));

const string6: string = '23, more like 24, more like 73, Am I 23, or am I 24? Well, I\'m 23. I guess I am 23. Oh really, someone said I looked like 18.';
const string6Encode: string = encodeRouter.encode(string6);
console.log(`\n` + `Original`.padEnd(11), string6);
console.log(`Expected`.padEnd(11), `NUM(23)%2c more like NUM(24)%2c more like NUM(73)%2e Am I NUM(23)%2c or am I NUM(24)%3f Well%2c I%27m NUM(23)%2e I guess I am NUM(23)%2e Oh really%2c someone said I looked like NUM(18)%2e`);
console.log(`Result`.padEnd(11), string6Encode);
console.log(`Decoded`.padEnd(11), decodeRouter.decode(string6Encode));

const juliusCipher: MessageRouterCipher = new MessageRouterCipher();

const message: string = 'Hello, world!';
console.log(`\n` + `Original`.padEnd(11), message);
console.log(`\n` + `Expected`.padEnd(11), `Khoor/#zruog$`);
console.log(`Encoded`.padEnd(11), juliusCipher.encrypt(message, 3));
console.log(`\n` + `Expected`.padEnd(11), `h&--0L@803-%A`);
console.log(`Encoded`.padEnd(11), juliusCipher.encrypt(message, 32));
console.log(`\n` + `Expected`.padEnd(11), `Wt{{~;/'~"{s0`);
console.log(`Encoded`.padEnd(11), juliusCipher.encrypt(message, 15));
console.log(`\n` + `Expected`.padEnd(11), ")FMMPl`XPSMEa");
console.log(`Encoded`.padEnd(11), juliusCipher.encrypt(message, 64));
console.log(`\n` + `Expected`.padEnd(11), "C`ggj'zrjmg_{");
console.log(`Encoded`.padEnd(11), juliusCipher.encrypt(message, -5));
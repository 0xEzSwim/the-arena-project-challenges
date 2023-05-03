import { 
    atoi, 
    itoa 
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
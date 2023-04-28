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
    diff
} from "./cs-fundamentals-typescript/basic-structures";


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
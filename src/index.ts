import { 
    printString, 
    printNumber,
    arrLength,
    strLength,
    split,
    reverseString } from "./cs-fundamentals-typescript/basic-structures";


const string = 'Hello project arena!';
const array = [1, 3, 3, 7];
printString(string);
printNumber(arrLength(array));
printString('');
printNumber(strLength(string));
printString('');
console.log('string split:', split(string));
console.log('reverse string:', reverseString(string));


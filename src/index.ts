import { 
    printString, 
    printNumber,
    arrLength,
    strLength,
    split,
    reverseString,
    push,
    reverseNumbers,
    indexOf
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
console.log('indexOf:', indexOf(array, 5));


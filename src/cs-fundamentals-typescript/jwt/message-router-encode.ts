export class MessageRouterEncoder {

    private static readonly speCharsOrderedByAsciiDeciCodeAsc: string[] = [  
        '!', '"', '#', '$', '%', '&',
        "'", '(', ')', '*', '+', ',',
        '-', '.', '/', ':', ';', '<',
        '=', '>', '?', '@', '[', '\\',
        ']', '^', '_', '`', '{', '|',
        '}', '~' 
    ];

    private static readonly digitsAsciiDeciCodeAsc: string[] = [
        '0', // 48
        '1', // 49
        '2', // 50
        '3', // 51
        '4', // 52
        '5', // 53
        '6', // 54
        '7', // 55
        '8', // 56
        '9', // 57
    ];

    private static asciiDeciOrderedAscBinarySearch(arr: string[], value: string): string | undefined {
        let mid = Math.floor(arr.length / 2);
        if(arr[mid]?.charCodeAt(0) < value?.charCodeAt(0)) {
            return MessageRouterEncoder.asciiDeciOrderedAscBinarySearch(arr.slice(mid + 1), value);
        }
        else if(arr[mid]?.charCodeAt(0) > value?.charCodeAt(0)) {
            return MessageRouterEncoder.asciiDeciOrderedAscBinarySearch(arr.slice(0, mid), value);
        }
    
        return arr[mid]?.charCodeAt(0) == value?.charCodeAt(0) ? value : undefined;
    };

    private static isDigit(char: string): boolean {
        return MessageRouterEncoder.asciiDeciOrderedAscBinarySearch(
            MessageRouterEncoder.digitsAsciiDeciCodeAsc, 
            char
        ) ? true : false;
    }

    private static isDigitSign(char: string): boolean {
        return char === '-' || char === '+';
    }

    private static encodeNumber(string: string, isNegative = false): string | undefined {
        if(Number.isNaN(string)) {
            return;
        }

        return `NUM(${isNegative ? '-' : ''}${string})`;
    }

    private static isSpecialCharacter(char: string): boolean {
        return MessageRouterEncoder.asciiDeciOrderedAscBinarySearch(
            MessageRouterEncoder.speCharsOrderedByAsciiDeciCodeAsc, 
            char
        ) ? true : false;
    }

    private static getHexAsciiSpeChar(char: string): string | undefined {
        if(char.length > 1) {
            return;
        }

        return char.charCodeAt(0).toString(16);
    }

    private static encodeSpecialCharacter(char: string): string | undefined {
        if(!MessageRouterEncoder.isSpecialCharacter(char)) {
            return;
        }
        const encodedSpecialChar: string | undefined = MessageRouterEncoder.getHexAsciiSpeChar(char);

        return encodedSpecialChar ? `%${encodedSpecialChar}` : undefined;
    }

    public encode(message: string): string {
        let i: number = 0;
        let encodedArray: string[] = [];

        while(i < message.length) {
            const rawChar: string = message[i];
            const nextRawChar: string = message[i+1];

            if(MessageRouterEncoder.isDigit(rawChar) || (MessageRouterEncoder.isDigitSign(rawChar) && MessageRouterEncoder.isDigit(nextRawChar))) {
                let step: number = 1;
                let j: number = i + step;
                let numberString: string = rawChar;
                let isNumber: boolean = true;

                while(MessageRouterEncoder.isDigit(message[j])) {
                    numberString += message[j];
                    ++j;
                }

                if(isNumber) {
                    let sign: string = '';
                    if(MessageRouterEncoder.isDigitSign(numberString[0])) {
                        sign = numberString[0];
                        numberString = numberString.slice(1);
                    }

                    encodedArray.push(MessageRouterEncoder.encodeNumber(numberString, sign === '-')!);
                    step = j - i;
                }

                i += step;
            } else {
                encodedArray.push(MessageRouterEncoder.encodeSpecialCharacter(rawChar) ?? rawChar);
                i++;
            }
        }
        return encodedArray.join('');
    }
}

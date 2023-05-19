export class MessageRouterDecoder {

    private static isSpecialCharacter(char: string): boolean {
        if(char.length > 1) {
            return false;
        }
        return char === '%';
    }

    private static getSpeChar(char2: string): string {
        return String.fromCharCode(parseInt(char2, 16));
    }

    private static decodeSpecialCharacter(char2: string): string {
        return MessageRouterDecoder.getSpeChar(char2);
    }

    public decode(message: string): string {
        let i: number = 0;
        let decodedArray: string[] = [];

        while(i < message.length) {
            const rawChar: string = message[i];
            const detectNumPrefix = message.substring(i, i + 'NUM('.length);

            if (detectNumPrefix === 'NUM(') {
                let j = i + detectNumPrefix.length;
                while (j < message.length && message[j] !== ')') {
                    j++;
                }

                if (j >= message.length) {
                    throw new Error('Invalid message');
                }

                const num: string = message.substring(i + detectNumPrefix.length, j);
                decodedArray.push(num);
                i = j + 1;
            } 
            else if(MessageRouterDecoder.isSpecialCharacter(rawChar)){
                const hexVal: string = message.substring(i + 1, i + 3);
                const decodedChar: string = MessageRouterDecoder.decodeSpecialCharacter(hexVal);
                decodedArray.push(decodedChar);
                i += 3;
            }else {
                decodedArray.push(rawChar);
                i++;
            }

        }
        return decodedArray.join('');
    }
}

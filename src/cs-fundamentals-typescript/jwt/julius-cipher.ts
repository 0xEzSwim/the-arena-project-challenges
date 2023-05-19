export class MessageRouterCipher {
    encrypt(message: string, shift: number): string {
        let i: number = 0;
        let encryptedString: string = '';
        const realShift: number = shift % (126-32+1);

        while(i < message.length) {
            let decimalValue: number = message[i].charCodeAt(0) + realShift;

            if (decimalValue > 126) {
                const gap: number = decimalValue - 126;
                decimalValue = 32 + gap - 1;
            }
            if (decimalValue < 32) {
                const gap: number = 32 - decimalValue;
                decimalValue = 126 - gap + 1;
            }
            
            encryptedString += String.fromCharCode(decimalValue);
            i++;
        }

        return encryptedString;
    }
  }
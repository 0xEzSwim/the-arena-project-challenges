type ItojiFn   = (nb: number) => string;

/**
 * Write a function itoji that converts a number into its representation in the following octal base: 👍🐕🥹💕🎁😊🏡✨.
 * @param nb 
 * @returns emoji string
 */
export const itoji: ItojiFn   = (nb: number): string => {
    const baseNum: { [id: number] : string; } = {
        0: '👍',
        1: '🐕',
        2: '🥹',
        3: '💕', 
        4: '🎁',
        5: '😊',
        6: '🏡',
        7: '✨'
    };
    let res: string = '';
    let isNegative: boolean = false;
    if(nb < 0 || 1/nb === -Infinity) {
        isNegative = true;
    }
    nb = isNegative ? nb * -1 : nb;
    let array: number[] = [];
    if(nb == 0) {
        res = baseNum[0]
    } else {
        while (nb > 0) {
            let remainder = nb % 8;
            nb = Math.floor(nb/8);
            array.unshift(remainder);
        }
        let i: number = 0;
        while(i < array.length) {
            res = res + baseNum[array[i]];
            i++;
        }
    }
    return isNegative ? '-' + res : res;
};
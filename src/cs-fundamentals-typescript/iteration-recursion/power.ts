type PowerFn = (nb: number, power: number) => number;

export const iterativePower: PowerFn = (nb: number, power: number): number => {
    let i: number = 0;
    let powerResult: number = 1;
    while(i < power) {
        powerResult *= nb;
        i++;
    }
    return powerResult;
};

export const recursivePower: PowerFn = (nb: number, power: number): number => {
    return power > 0 ? nb * iterativePower(nb, power -1) : 1;
};

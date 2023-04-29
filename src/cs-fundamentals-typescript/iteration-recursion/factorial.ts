type FactorialFn = (nb: number) => number;

export const recursiveFactorial : FactorialFn = (nb: number): number => {
    return nb > 0 ? nb * recursiveFactorial (nb-1) : 1;
};

export const iterativeFactorial : FactorialFn = (nb: number): number => {
    let i: number = 1;
    let factorial: number = 1;
    while(i <= nb) {
        factorial *= i++;
    }

    return factorial;
};
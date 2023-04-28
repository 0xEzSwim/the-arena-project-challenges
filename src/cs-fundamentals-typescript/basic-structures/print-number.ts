type PrintNumberFn = (nbr: number) => void;

export const printNumber : PrintNumberFn = (nbr: number) => {
    process.stdout.write(`${nbr}`);
};
type PrintStringFn = (str: string) => void;

export const printString: PrintStringFn = (str) => {
    process.stdout.write(`${str}\n`);
};
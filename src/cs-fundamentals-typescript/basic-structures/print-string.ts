type PrintStringFn = (str: string) => void;

export const printString: PrintStringFn = (str: string) => {
    process.stdout.write(`${str}\n`);
};
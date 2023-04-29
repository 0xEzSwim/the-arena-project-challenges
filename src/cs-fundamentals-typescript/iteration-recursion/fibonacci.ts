type FibonacciFn = (n: number) => number;
/**
 * @param n - The number of sequence
 * @returns The value of the nth term of the Fibonacci sequence, where n >= 1
 */
export const fibonacci: FibonacciFn = (n: number): number => {
    return n > 2 ? fibonacci(n-1) + fibonacci(n-2) : n-1;
};


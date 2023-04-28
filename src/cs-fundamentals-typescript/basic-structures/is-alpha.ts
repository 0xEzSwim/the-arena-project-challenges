type IsAlphaFn = (str: string) => boolean;

export const isAlpha: IsAlphaFn = (str: string): boolean => {
    return /^[A-Z]*$/i.test(str);
}
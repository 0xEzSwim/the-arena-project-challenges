type SearchFn = (arr: number[], value: number) => number | undefined;

export const jumpSearch: SearchFn = (arr: number[], value: number): number | undefined =>  {
    let jump: number = Math.floor(Math.sqrt(arr.length));
    let i: number = 0;
    let previous: number = i;

    while(arr[i] < value) {
        previous = i;
        i = i >= arr.length ? arr.length - 1 : i + jump;
    }

    while (i > previous) {
        if(arr[i] == value) {
            return value;
        }
        i--
    }

    return;
};


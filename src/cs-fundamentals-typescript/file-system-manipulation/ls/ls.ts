import { readdirSync, Stats, statSync } from 'fs';

const path = process.argv[2];

if (typeof path !== 'string') {
    console.warn('Missing path to directory.');
    process.exit(1);
}

const listDirectory = (path: string): string => {
    let folders: string[] = [];
    let total: number = 0;
    const folderChildren: string[] = readdirSync(path).sort((a, b) => a.localeCompare(b));
    let i: number = 0;
    
    while(i < folderChildren.length) {
        const child: string = folderChildren[i];
        const childStats: Stats = statSync(`${path}/${child}`);

        total += childStats.blocks;
        const fileTypeToDisplay = childStats.isDirectory() ? "Directory" : "File";
        folders.push(`${fileTypeToDisplay.padEnd(11)}${child}`);

        i++;
    }
    return `total ${total}\n${folders.join('\n')}`;
}

try {
    console.log(listDirectory(path));
    process.exit(0);
} catch (err) {
    console.error(`Error: ${path} is not a valid directory`);
    process.exit(1);
};

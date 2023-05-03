import { readdirSync, Stats, statSync } from 'fs';
import { join } from 'path';

const path = process.argv[2];

if (typeof path !== 'string') {
    console.warn('Missing path to directory.');
    process.exit(1);
}

const listDirectory = (path: string, isFirst: boolean = false) => {
    let folders: string[] = [];
    let subFolders: string[] = [];
    let total: number = 0;
    const folderChildren: string[] = readdirSync(path).sort((a, b) => a.localeCompare(b));
    let i: number = 0;
    while(i < folderChildren.length) {
        const child: string = folderChildren[i];
        const childPath: string = join(path, child);
        const childStats: Stats = statSync(childPath);

        total += childStats.blocks;
        const fileTypeToDisplay = childStats.isDirectory() ? "Directory" : "File";
        if(childStats.isDirectory()) {
            subFolders.push(childPath);
        }
        folders.push(`${fileTypeToDisplay.padEnd(11)}${child}`);

        i++;
    }
    process.stdout.write(`${!isFirst ? '\n' : ''}${path}:\ntotal ${total}\n${folders.join('\n')}${folders.length ? '\n' : ''}`);

    i = 0;
    while(i < subFolders.length) {
        listDirectory(subFolders[i++]);
    }
}

try {
    listDirectory(path, true);
    process.exit(0);
} catch (err) {
    console.error(`Error: ${path} is not a valid directory`);
    process.exit(1);
};

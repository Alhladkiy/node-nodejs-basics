import fs from 'fs';

export const read = async () => {
    const path = 'src/fs/files/fileToRead.txt';
    fs.readFile(path, 'utf8', (err, fileContent) => {
        if (err) {
            console.log('FS operation failed');
        } else {
            console.log(fileContent);
        }
    });
};

read();
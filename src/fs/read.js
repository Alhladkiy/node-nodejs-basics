import fs from 'fs';

export const read = async () => {
    const file = 'src/fs/files/fileToRead.txt';
    if (fs.existsSync(file)) {
        fs.readFile(file, 'utf8', (err, fileContent) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                console.log(fileContent);
            }
        });
    } else {
        throw new Error('FS operation failed');
    }
};

read();
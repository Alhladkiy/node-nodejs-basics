import fs from 'fs';

export const rename = async () => {
    const oldFile = 'src/fs/files/wrongFilename.txt';
    const newFile = 'src/fs/files/properFilename.md';

    fs.rename(oldFile, newFile, (err) => {
        if (err) console.log('FS operation failed');
    })
};

rename();
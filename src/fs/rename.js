import fs from 'fs';

export const rename = async () => {
    const oldFile = 'src/fs/files/wrongFilename.txt';
    const newFile = 'src/fs/files/properFilename.md';
    if (fs.existsSync(oldFile)) {
        fs.rename(oldFile, newFile, (err) => {
            if (err) {
                throw new Error('FS operation failed');
            }
        })
    } 
    else if (!fs.existsSync(oldFile)) {
        throw new Error('FS operation failed');
    }
    else if (fs.existsSync(newFile)) {
        throw new Error('FS operation failed');
    }
};

rename();
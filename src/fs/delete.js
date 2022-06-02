import fs from 'fs';

export const remove = async () => {
    const path = 'src/fs/files/fileToRemove.txt';
    fs.unlink(path, (err) => {
        if (err) console.log('FS operation failed');
    })
};

remove();
import fs from 'fs';

export const list = async () => {
    const path = 'src/fs/files';
    fs.readdir(path, (err, files) => {
        if (err) {
            console.log('FS operation failed');
        } else {
            files.forEach((item) => {
                console.log(item);
            })
        }
    })
};

list();
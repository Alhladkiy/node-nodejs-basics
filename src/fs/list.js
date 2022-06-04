import fs from 'fs';

export const list = async () => {
    const folder = 'src/fs/files';
    let arr = []
    if (fs.existsSync(folder)) {
        fs.readdir(folder, (err, files) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                files.forEach((item) => {
                    arr.push(item);
                });
            }
            console.log(arr);
        });
    } else {
        throw new Error('FS operation failed');
    }
};

list();
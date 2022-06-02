import fs from 'fs';

export const list = async () => {
    const folder = 'src/fs/files';
    if (fs.existsSync(folder)) {
        fs.readdir(folder, (err, files) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                files.forEach((item) => {
                    console.log(item);
                });
            }
        });
    } else {
        throw new Error('FS operation failed');
    }
};

list();
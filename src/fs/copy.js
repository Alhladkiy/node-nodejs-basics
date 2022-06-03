import fs from 'fs';
import path from 'path';

export const copy = async () => {
    const pathOldFolder = 'src/fs/files';
    const pathNewFolder = 'src/fs/files_copy/files';
    if (!fs.existsSync(pathOldFolder)) {
        throw new Error('FS operation failed');
    }
    if (fs.existsSync(pathNewFolder)) {
        throw new Error('FS operation failed');
    } else {
        fs.mkdir(pathNewFolder, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
            fs.readdir(pathOldFolder, {withFileTypes: true}, (err, files) => {
                if (err) {
                    throw err;
                }
                for (let file of files) {
                    if (!file.isDirectory()) {
                        fs.copyFile(path.join(pathOldFolder, file.name), path.join(pathNewFolder, file.name), (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    }
                }
            });
        })
    }
};

copy();
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
        copyFolder(pathOldFolder, pathNewFolder)
    }
};

function copyFolder(copyFrom, copyTo) {
    fs.mkdir(copyTo, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        fs.readdir(copyFrom, {withFileTypes: true}, (err, dirents) => {
            if (err) {
                throw err;
            }
            for (let dirent of dirents) {
                const inputPath = path.join(copyFrom, dirent.name);
                const outputPath = path.join(copyTo, dirent.name);
                if (!dirent.isDirectory()) {
                    fs.copyFile(inputPath, outputPath, (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                } else {
                    copyFolder(inputPath, outputPath);
                }
            }
        });
    })
}

copy();
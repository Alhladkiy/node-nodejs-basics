import fs from 'fs';

export const remove = async () => {
    const file = 'src/fs/files/fileToRemove.txt';
        if (fs.existsSync(file)) {
            fs.unlink(file, (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                }
            })
        } else {
            throw new Error('FS operation failed');
    }
};

remove();
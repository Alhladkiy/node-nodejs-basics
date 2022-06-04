import crypto from 'crypto';
import fs from 'fs';

export const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                const hash = crypto.createHash('SHA256').update(fileContent).digest('hex');
                console.log(hash);
            }
        });
    } else {
        throw new Error('FS operation failed');
    }
};

calculateHash();
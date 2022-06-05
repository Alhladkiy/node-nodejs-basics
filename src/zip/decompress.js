import { createGunzip }  from 'zlib';
import { pipeline }  from 'stream';
import { createReadStream, createWriteStream, unlink, existsSync } from 'fs';

export const decompress = async () => {
    const compressPath = 'src/zip/files/archive.gz';
    const decompressPath = 'src/zip/files/fileToCompress.txt'; 
    const inStream = createReadStream(compressPath);
    const outStream = createWriteStream(decompressPath);
    const gzip = createGunzip();
    
    pipeline(inStream, gzip, outStream, (err) => {
        if (err) {
            throw new Error ('Compress error');
        }
    });
}

decompress();
import { createReadStream, createWriteStream } from 'fs';
import { createGzip }  from 'zlib';
import { pipeline }  from 'stream';

export const compress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt';
    const compressPath = 'src/zip/files/archive.gz';
    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(compressPath);

    pipeline(source, gzip, destination, (err) => {
    if (err) {
        throw new Error ('Compress error');
    }
    });
};

compress();

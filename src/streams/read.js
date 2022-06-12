import fs from  'fs';

export const read = async () => {
    let content = '';
    const filePath = 'src/streams/files/fileToRead.txt';
    const readStream  = fs.createReadStream(filePath, 'utf8');
    readStream.on('data', (chunk) => {
        content += chunk;
    }).on('end', () => {
        process.stdout.write(content);
    });
};

read();
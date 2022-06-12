import fs from  'fs';

export const write = async () => {
    const writeFilePath = 'src/streams/files/fileToWrite.txt';
    process.stdin.on('data', content => {
        const writeStream  = fs.createWriteStream(writeFilePath);
        writeStream.write(content);
    });
}

write();

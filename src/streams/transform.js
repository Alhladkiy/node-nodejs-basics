import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const readable = process.stdin;
    const writeable = process.stdout;

    const transform = new Transform({
        transform(chunk, enc, callback) {
            const chunkToString = chunk.toString().trim();
            const reverseChunkToString= chunkToString.split('').reverse().join('');
            callback(null, reverseChunkToString + '\n');
        }
    })
    pipeline(readable, transform, writeable, (err) => {
        console.log(`ERROR: ${err}`)
    })
};

transform();

import { release, version } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer as createServerHttp } from 'http';
import { createRequire } from "module";
import path from 'path';
import './files/c.js';

const random = Math.random();
const require = createRequire(import.meta.url);
const importParams = {
    assert: {
        type: "json",
    },
};

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json', importParams);
} else {
    unknownObject = require('./files/b.json', importParams);
}

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__fileName}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};


import readLine  from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { join } from 'path';
import process from 'process';
import os from 'os';
import path from 'path';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFromCopy = (path.join(__dirname, 'files'));
const pathToCopy = path.join(__dirname, 'files_copy');

function startProject() {
    const args = process.argv.slice(2);
    args.forEach((item) => {
        const name = item.slice(11);
        console.log(`Welcome to the File Manager, ${name}!`)
        console.log(`You are currently in ${ __dirname}`);
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (line) => {
            const folder = line.slice(line.lastIndexOf(' '));
            if (line === '.exit') {
                console.log(`Thank you for using File Manager, ${name}!`)
                rl.close();
            } 
            else if (line === 'ls') {
                readFiles();
            }
            else if (line === 'os --username') {
                userNameSystem();
            }
            else if (line === 'os --architecture') {
                getCpuArchitecture();
            }
            else if (line === 'os --EOL') {
                getEndOfLine();
            }
            else if (line === 'os --homedir') {
                getHomeCatalog();
            }
            else if (line === 'os --cpus') {
                getInfoCpu();
            } 
            else if (line === 'up') {
                upDirectory();
            }
             else if (line === `add ${folder.trim()}`) {
                createFile(folder);
            }
            else if (line === `rm ${folder.trim()}`) {
                removeFile(folder);
            }
            else if (line === `cd ${folder.trim()}`) {
                changeDirectory(folder);
            }
            else if (line === `hash ${folder.trim()}`) {
                calculateHash(folder);
            }

        });

        rl.on('SIGINT', () => {
            console.log(`Thank you for using File Manager, ${name}!`)
            rl.close(); 
        });
    })
}

function readFiles () {
    fs.readdir(__dirname, (err, files) => {
        const list = [];
        if (err) {
            throw new Error('err');
        } else {
            files.forEach((item) => {
                list.push(item);
            });
        }
        console.log(list);
    });
}

function userNameSystem() {
    const userNameSystem =  os.userInfo().username;
    console.log(`System user name: ${userNameSystem}`);
}

function getCpuArchitecture () {
    const cpu = os.arch();
    console.log(`Your CPU architecture: ${cpu}`);
}

function getEndOfLine() {
    const eol = JSON.stringify(os.EOL);
    console.log(`It's: ${eol}`);
}

function getHomeCatalog() {
    const homeCatalog = os.homedir();
    console.log(`Your home catalog: ${homeCatalog}`)
}

function getInfoCpu() {
    const infoCpu = os.cpus();
    const result = [];
    infoCpu.forEach((item) => {
        const speed = `speed: ${item.speed / 1000}`;
        const model = `model: ${item.model}`;
        result.push(model, speed)

    })
    console.log(result)
}

function upDirectory() {
    if(os.homedir().length < process.cwd().length) {
        const upDirectory = path.join(`${process.cwd()}`, '..');
        process.chdir(upDirectory);
    }
    console.log(`You are currently in ${process.cwd()}\n`)
};

function removeFile(folder) {
    const pathFile = (path.join(process.cwd(), folder.trim()));
        fs.unlink(pathFile, (err) => {
            if (err) {
                throw new Error('file is not delete!!!');
            }
            console.log(`${pathFile} delete`)
        })
}

function createFile(folder) {
    const pathFile = (path.join(process.cwd(), folder.trim()));
    fs.writeFile(pathFile, '', (err) => {
        if (err) {
            throw new Error('file is not create');
        }
        console.log('file create!!!')
    })
}

function changeDirectory(folder) {
    const pathFile = (path.join(process.cwd(), folder.trim()));
    process.chdir(pathFile);
    console.log(`You in ${pathFile}`);
}

function calculateHash(folder) {
    const pathFile = (path.join(process.cwd(), folder.trim()));
    if (fs.existsSync(pathFile)) {
        fs.readFile(pathFile, 'utf8', (err, fileContent) => {
            if (err) {
                throw new Error('err, try again');
            } else {
                const hash = crypto.createHash('SHA256').update(fileContent).digest('hex');
                console.log(hash);
            }
        });
    } else {
        throw new Error('err, try again');
    }
}


startProject();




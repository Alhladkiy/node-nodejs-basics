
import readLine  from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { join } from 'path';
import process from 'process';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const updatePathToFolder = join( __dirname, '..');

function statProject() {
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
    console.log(homeCatalog)
}

statProject();




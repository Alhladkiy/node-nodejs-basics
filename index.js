
import readLine  from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { cwd } from 'process';
import fs from 'fs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



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
            else if (line === 'ls')  {
                readFiles();
            }

        });
        rl.on('SIGINT', (line) => {
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
statProject();




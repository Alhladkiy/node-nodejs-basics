import readLine  from 'readline';
import { cwd } from 'process';

function statProject() {
    const args = process.argv.slice(2);
    args.forEach((item) => {
        const name = item.slice(11);
        console.log(`Welcome to the File Manager, ${name}!`)
        console.log(`You are currently in ${cwd()}`);
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on('line', (line) => {
            if (line === '.exit') {
                console.log(`Thank you for using File Manager, ${name}!`)
                rl.close(); 
            }
        });
        rl.on('SIGINT', (line) => {
            console.log(`Thank you for using File Manager, ${name}!`)
            rl.close(); 
        })
    })
}

statProject();




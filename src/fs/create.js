import fs from 'fs'

export const create = async () => {

    fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
        if (err) throw err;
        console.log('FS operation failed');
      });
};

create();
import fs from 'fs';

export const create = async () => {
  const folder = 'src/fs/files/fresh.txt';
  const content = 'I am fresh and young';
  try {
    if (fs.existsSync(folder)) {
      throw new Error('FS operation failed');
    } else {
      fs.writeFile(folder, content, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        }
      })
    } 
  } catch(err) {
    throw new Error('FS operation failed');
  }
};

create();
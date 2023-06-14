const fs = require('fs');

const contentToWrite = 'Kritika Goyal';

fs.writeFile('file.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written successfully.');
});

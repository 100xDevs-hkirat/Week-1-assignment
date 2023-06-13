const fs = require('fs');

const filePath = 'file.txt';

fs.readFile(filePath, (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
  } else {
    const Content = data.toString().replace(/\s+/g, ' ').trim();

    fs.writeFile(filePath, Content, (error) => {
      if (error) {
        console.error('Error writing file:', error);
      } else {
        console.log('File contents modified and written successfully.');
      }
    });
  }
});

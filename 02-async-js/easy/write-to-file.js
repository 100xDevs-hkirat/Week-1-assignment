const fs = require('fs');

const filePath = 'test.txt';

const content = 'Test Data to be written for checks';

// Write to the file
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred while writing to the file:', err);
    return;
  }
  console.log('File has been written successfully.');
});
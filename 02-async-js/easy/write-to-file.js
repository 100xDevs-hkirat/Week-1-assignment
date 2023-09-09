const fs = require('fs');

// Specify the file path where you want to write the data
const filePath = 'b.txt';

// Data you want to write to the file
const dataToWrite = 'Hello, World!';

// Write the data to the file
fs.writeFile(filePath, dataToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  
  console.log('Data has been written to the file.');
});
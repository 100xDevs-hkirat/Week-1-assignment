// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// INPUT : hello     world    my    name   is       raman
// OUTPUT : hello world my name is raman


const fs = require('fs/promises');

function removeExtraSpaces(filePath) {
  fs.readFile(filePath, 'utf8')
    .then(data => {
      const updatedData = data.replace(/\s+/g, ' ');
      return fs.writeFile(filePath, updatedData, 'utf8');
    })
    .then(() => {
      console.log('File updated successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

removeExtraSpaces('file.txt');


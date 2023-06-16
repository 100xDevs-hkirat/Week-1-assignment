const fs = require('fs');

function removeExtraSpacesAndWrite(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const modifiedContent = data.replace(/\s+/g, ' ');

    fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }

      console.log('File successfully modified and saved.');
    });
  });
}

// Example usage:
removeExtraSpacesAndWrite('path/to/your/file.txt');



/* To use this function, replace 'path/to/your/file.txt' with the actual path to the file you want to modify. */
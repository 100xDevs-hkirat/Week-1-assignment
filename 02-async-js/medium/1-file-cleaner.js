
const fs = require('fs');

 

const filePath = 'input.txt';

 

// Read the file

fs.readFile(filePath, 'utf8', (err, data) => {

  if (err) {

    console.error('Error reading the file:', err);

    return;

  }

 

  // Remove extra spaces using regular expression

  const modifiedData = data.replace(/\s+/g, ' ');

 

  // Write the modified content back to the same file

  fs.writeFile(filePath, modifiedData, 'utf8', (err) => {

    if (err) {

      console.error('Error writing to the file:', err);

      return;

    }

 

    console.log('Extra spaces removed and content written back to the file.');

  });

});

 
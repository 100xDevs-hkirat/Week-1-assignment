
4-write-to-file.js

 

const fs = require('fs');

 

// The content to write to the file

const contentToWrite = 'This is some content that we are writing to a file.\n';

 

// The name of the file to write to

const filename = 'output.txt';

 

// Function to write content to a file asynchronously

function writeFileAsync(filename, content) {

  fs.writeFile(filename, content, 'utf8', (err) => {

    if (err) {

      console.error(`Error writing to file ${filename}: ${err}`);

    } else {

      console.log(`Content successfully written to ${filename}`);

    }

  });

}

 

// Call the function to write content to the file

writeFileAsync(filename, contentToWrite);

 

console.log('Writing to the file...');
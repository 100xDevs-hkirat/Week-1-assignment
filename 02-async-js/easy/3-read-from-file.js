// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function readFileAndPrint(filePath) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    
    console.log(data);
    
    // Perform an expensive operation below the file read
    // Example: A loop that executes a large number of iterations
    for (let i = 0; i < 1000000000; i++) {
      // Expensive operation
    }
    
    console.log('Expensive operation complete.');
  });
}

// Usage
const filePath = 'path/to/your/file.txt';
readFileAndPrint(filePath);

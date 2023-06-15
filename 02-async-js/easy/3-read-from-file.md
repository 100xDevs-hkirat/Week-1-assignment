## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function readFileAndPrint(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('File Contents:');
    console.log(data);

    // Perform an expensive operation
    expensiveOperation();
  });
}

function expensiveOperation() {
  // Simulating an expensive operation by adding a loop
  let sum = 0;
  for (let i = 0; i < 1000000000000000; i++) {
    sum += i;
  }

  console.log('Result of the expensive operation:', sum);
}

const filename = 'term.txt';
readFileAndPrint(filename);

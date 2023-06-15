## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

code :

const fs = require('fs');

// Read file contents asynchronously
fs.readFile('path/to/file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
    return;
  }

  // Print file contents
  console.log('File contents:', data);

  // Perform an expensive operation
  performExpensiveOperation();
});

// Expensive operation function
function performExpensiveOperation() {
  // Simulate an expensive operation
  // Add more computations or loops to make it more expensive
  for (let i = 0; i < 100000000; i++) {
    // Do some computation
  }

  // Output the completion of the expensive operation
  console.log('Expensive operation complete');
}

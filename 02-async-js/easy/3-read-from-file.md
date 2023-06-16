## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);

  // Expensive operation below the file read
  expensiveOperation();
});

function expensiveOperation() {
  // Simulating an expensive operation
  for (let i = 0; i < 1000000000; i++) {
    // Do some complex calculations
  }
  
  console.log('Expensive operation completed');
}




















Reading a file is an I/O operation that can potentially take some time, especially if the file is large or the storage is slow. JavaScript, being a single-threaded language, can become unresponsive if it waits for the file reading operation to complete before moving on to other tasks.

To overcome this, Node.js provides asynchronous APIs for file I/O operations. The fs.readFile function is an example of such an asynchronous API. It allows the file reading operation to be initiated and then continues executing the remaining code without waiting for the operation to complete. 
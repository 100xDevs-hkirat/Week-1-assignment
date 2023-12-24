/*Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/
const fs = require('fs');
// Specify the file path
const filePath = 'randomtext.txt';

// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // The content of the file is in the 'data' variable
  console.log('File Content:', data);
});

count=0;
for(let i=0;i<10000000000;i++){
  count++;
}
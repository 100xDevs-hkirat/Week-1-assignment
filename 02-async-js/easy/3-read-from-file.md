## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');
const fileName = '1.txt';
const readSingleFile =(err, data) => {
if (err) {
  console.error(`Error reading file: ${err}`);
} else {
  console.log('File contents:');
  console.log(data);
}
}
fs.readFile(fileName, 'utf8', readSingleFile);

let counter=0;
for(let i=0;i<1;i++)
  {
    counter+=1
  }

console.log('counter'+counter)


//----------------------------
// output 
    counter 1
    file content 
    aditya goswami

    even though we call the readfile before the for loop, as reading file is asynchronous process , the async process is handle by  webapi , the waiting to read the file is  done in webapi and it comes callback queue and once the synchronous process has been executed in callstack , the event loop will check if the callstack is empty or not then it , then eventloop will bring the aync task to callstack where it will be executed
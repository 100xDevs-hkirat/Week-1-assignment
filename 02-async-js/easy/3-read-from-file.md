## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

//reading file 
const fs = require('fs');
try{
const data = fs.readFileSync("file.txt",'utf8');
  console.log("data", data);
}
catch(error){
  console.log("the error",error);
}
// asynchronous
// reading file asynchronously
const fs = require('fs');
//fs - filesystem
fs.readFile("file.txt","utf8",(error,data)=>{
  if(error){
    console.log("the error is :", error);
    return ;
  }
  console.log("the data is :", data);
})

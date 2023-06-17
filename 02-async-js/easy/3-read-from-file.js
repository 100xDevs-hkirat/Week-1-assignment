// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

var fs=require('fs');
let Sum=0;
function sum(n){
    for(let i=1;i<=n;i++){
        Sum+=i;
    }
    console.log(Sum);
}
fs.readFile('text1.txt',(error,data)=>{
    if(error)console.log("error");
    sum(data);
})
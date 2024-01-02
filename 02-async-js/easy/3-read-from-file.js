// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

const filePath = '02-async-js/easy/Test.txt'

fs.readFile(filePath,'utf8',(err,data)=>{
    if(err){
        console.log("Error Reading the file - "+err);
        return;
    }

    console.log("File Content : ");
    console.log(data);
});

//expensive funtion

function stepCounter(n){
    let count = 0;
    for(var i=0;i<n;i++){
        for(var j=0;j<i;j++){
            count++;
        }
    }
    console.log(count);
}

stepCounter(1000000);
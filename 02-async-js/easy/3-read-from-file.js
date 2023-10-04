// Replace 'yourfilename.txt' with the actual filename you want to read

const fs = require('fs');

const filename = 'file.txt';

 

//asynchronous method

fs.readFile(filename, 'utf8', readFileAndPrint);



// Function to read the file asynchronously

function readFileAndPrint(err, content) {

  console.log("done reading file , content is " + content )

 // expensiveFn();

}

 

function expensiveFn(){

    for(i=0 ; i<1000000000 ; i++){

        //  console.log("yes sir")

    }

 

    console.log("yes sir")

}

 

// Call the function to read and print the file contents

readFileAndPrint();

 

// This message will be printed before reading the file contents and expensiveFn() completion

console.log('Reading file and performing expensive operation...');
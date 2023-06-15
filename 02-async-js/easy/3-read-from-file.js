// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

var fs = require('fs');

fs.readFile('./textFile.txt', 'utf8', (err, data) => {
    if (err)
    {
        console.log("Error reading file. Error: " + err);
    }
    else
    {
        console.log("File read successfully. Data from file: ");
        console.log(data);
    }
});

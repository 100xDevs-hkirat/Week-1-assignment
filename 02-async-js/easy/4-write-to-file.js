// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

var fs = require('fs');
var test = "Writing to file..";
fs.writeFile('./textFile.txt', test, 'utf8', (err)=>{
    if (err)
    {
        console.log("Error writing to file. Error: " + err);
    }
});


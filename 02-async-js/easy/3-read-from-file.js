// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

var fs = require('fs')

fs.readFile('demo1.txt', (err, data) => {
    if (err != null) {
        throw err;
    }
    const content = data.toString();
    console.log(content);
});

var element = 0;
for (let index = 0; index < 1000000; index++) {
    element++;
}
console.log(element);
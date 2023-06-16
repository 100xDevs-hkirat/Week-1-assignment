// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

var fs = require('fs');

fs.writeFile('demo2.txt', 'Glad to meet you!', (err) => {
    if (err) throw err;
    console.log('Saved!');
});

fs.appendFile('demo1.txt', '\nIts been very long after ours previous meet.\n', (err) => {
    if (err) throw err;
    console.log('Updated!');
});
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

let data = "Is this really happening?";

function afterContentUpdated(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written');
}

fs.writeFile('a.txt', data, 'utf8', afterContentUpdated);


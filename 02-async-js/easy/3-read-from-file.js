const fs = require('fs');

function readFileAndLogData(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
    } else {
      console.log('File data:');
      console.log(data);
    }
  });
}

readFileAndLogData(/* path/to/file */);


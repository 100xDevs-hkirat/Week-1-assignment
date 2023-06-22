const fs = require('fs');

const contentToWrite = 'This is the content that will be written to the file.';

fs.writeFile('output.txt', contentToWrite, 'utf8', (error) => {
    if (error) {
        console.error('Error writing file:', error);
    } else {
        console.log('File write operation completed successfully.');
    }
});

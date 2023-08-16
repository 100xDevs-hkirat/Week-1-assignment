const fs = require('fs');

const content = 'No World!';

const asyncWriteToFile = () => {
    fs.writeFile('file.txt', content, (err) => {
        console.log('File has been saved successfully');
    });
};

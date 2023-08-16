const fs = require('fs');

const asyncWriteToFile = (content) => {
    fs.writeFile('../easy/file.txt', content, (err) => {
        console.log('File has been saved successfully');
    });
};

function asyncReadFile() {
    fs.readFile('../easy/file.txt', 'utf-8', (err, content) => {
        const contentWES = content.replace(/\s+/g, ' ');
        asyncWriteToFile(contentWES);
    });
}
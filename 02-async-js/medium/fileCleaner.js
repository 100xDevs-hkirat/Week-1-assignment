const fs = require('fs');

fs.readFile('./1-file-cleaner.md', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const toBeCleaned = data.toString();
        const cleanedString = toBeCleaned.replace(/\s+/g, ' ').trim();

        fs.writeFile('./1-file-cleaner.md', cleanedString, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('File successfully written.');
            }
        });
    }
});

const fs = require('fs');

let fileData;
fs.readFile('./02-async-js/medium/file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    fileData = data.replace(/\s+/g, ' ').trim('');
    try {
        fs.writeFile('./02-async-js/medium/file.txt', fileData, 'utf-8', (err) => {
            console.log("File is overwritten Succesfully");
          });
    } catch (error) {
            console.log(err);
            return;
    }
   
});




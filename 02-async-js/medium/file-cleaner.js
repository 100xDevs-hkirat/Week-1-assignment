const fs = require('fs')

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    let resultString = data.replace(/\s+/g, ' ');

    fs.writeFile('file.txt', resultString, 'utf-8', (err) => {
        if (err) {
            return
        }
        console.log("File updated with the trimmed content");
    })
})



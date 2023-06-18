const fs = require('fs');

function clean(str) {
    // assert : str is any string

    return str.replace(/\s+/g, " ");
}

contents = fs.readFile('a.txt', 'utf-8', (err, data) => {
    cleanedContents = clean(data);

    fs.writeFile('a.txt', cleanedContents, (err) => {
        if (err) throw err;
    
        console.log('Write successful');
    });
});









const fs = require('fs');

function clean(str) {
    // assert : str is any string

    return str.replace(/\s+/g, " ");
}

fs.readFile('a.txt', 'utf-8', (err, data) => {
    cleanedData = clean(data);

    fs.writeFile('a.txt', cleanedContents, (err) => {
        if (err) {
            throw err;
        }

        console.log('Write successful');
    })
});
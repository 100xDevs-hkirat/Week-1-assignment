const fs = require('fs');


function asyncWriteFile(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Success");
            }
        });
    });
}

function asyncReadFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}


const readFilename = './readAFile.txt';
const writeFilename = './destinationFile.txt';


asyncReadFile(readFilename).then((data) => {
    console.log(`Successfully read the file. content: ${data}`);
    return asyncWriteFile(writeFilename, data);
}).then((data) => {
    console.log(`Successfully write the file. Task : ${data}`);
    console.log("All tasks complete");
}).catch((err) => {
    console.log(`Error: ${err}`);
})
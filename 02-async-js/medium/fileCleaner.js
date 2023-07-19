const fs = require('fs');

let dataFromFile = "";
fs.readFile("./file-to-clean.txt", 'utf8', (err, data) => {
    if(err) {
        throw new Error("Error occured while reading data");
    } else {
        let cleanedData = data.replace(/\s+/g, " ").trim();
        console.log("Data read from file successfully");

        fs.writeFile("cleanedFile.txt",cleanedData, 'utf8', (err) => {
            if(err) {
                throw new Error("Error occured while writing data into file");
            } else {
                console.log("Data written into the file");
            }
        })
    }
});
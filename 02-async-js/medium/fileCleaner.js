const fs = require('fs');

let dataFromFile = "";
fs.readFile("./file-to-clean.txt", 'utf8', (err, data) => {
    if(err) {
        throw new Error("Error occured while reading data");
    } else {
        let cleanedData = data.replace(/\s+/g, " ").trim();
        console.log("Data read from file successfully");
        
        /*its important for the file writing logic to be present here inside the
        readFile callback function as we need to make the file AFTER the data has
        been read form the other file. If we put this writing logic outside readFile()
        then writeFile() will create the file which will be empty as readFile prcess would 
        not be completed in time.
        */
        fs.writeFile("cleanedFile.txt",cleanedData, 'utf8', (err) => {
            if(err) {
                throw new Error("Error occured while writing data into file");
            } else {
                console.log("Data written into the file");
            }
        })
    }
});
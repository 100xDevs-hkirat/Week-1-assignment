// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const { error } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const filePath = '/Users/namanagrawal/Desktop/Codes/100x/Assignments/Week_1/Week-1-assignment/02-async-js/medium/CleanerTest.txt'
let data = "";


function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                reject("Error in reading Content - " + err);
            } else {
                console.log(content);
                resolve(content);
            }
        });
    });
}



function dataCleaner(){
    let corrected = ""
    for(var i=0;i<data.length;i++){
        if(data[i]==' '){
            corrected+=data[i];
        while(i<data.length && data[i]==' '){
            i++;
        }
    }
        else{
            corrected+=data[i];
        }
    }
    return corrected;
}

readFilePromise(filePath)
    .then((data) => {
        console.log("Successful! Reading");
        let corrected = dataCleaner(data);
        console.log("Edited correct file");
        console.log(corrected);
    })
    .catch((error) => {
        console.log(error);
    });





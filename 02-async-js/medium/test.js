const fs = require('fs');
const filePath = '/Users/namanagrawal/Desktop/Codes/100x/Assignments/Week_1/Week-1-assignment/02-async-js/medium/CleanerTest.txt';

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

readFilePromise(filePath)
    .then((data) => {
        console.log("Successful! Reading");
        let modifiedContent = dataCleaner(data);
        console.log("Edited correct file");
        fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
            if (err) {
              console.error('Error writing to the file:', err);
              return;
            }
        
            console.log('File has been successfully modified.');
          });
    })
    .catch((error) => {
        console.log(error);
    });

function dataCleaner(data) {

   var string = data.split(" ");
   var ansString = [];
   for(var i=0;i<string.length;i++){
    if(string[i]!=""){
        ansString.push(string[i])
    }
   }
   return ansString.join(" ");
}

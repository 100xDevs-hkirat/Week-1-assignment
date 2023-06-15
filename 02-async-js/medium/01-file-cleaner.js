const fs = require('fs');

function removeExtraSpaces(filePath){
    fs.readFile(filePath,"utf8",(err,data)=>{
        if(err){
            console.log("error in reading the file");
            return;
        }
        console.log("file read succesfully");


    const modifiedContent = data.replace(/\s+/g, ' ').trim();

    fs.writeFile(filePath,modifiedContent,"utf8",(err)=> {
        if(err){
            console.log("error in writing to the file");
            return;
        }

        console.log("extra spaces removed, file updated succesfully");
    });

});
}

const filePath = '/Users/sshet/Desktop/100xdevs/week1/async-js/medium/test.txt';
removeExtraSpaces(filePath);
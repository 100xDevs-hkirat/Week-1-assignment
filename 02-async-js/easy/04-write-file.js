const fs = require('fs');

function writeFile(filePath,content){
    fs.writeFile(filePath,content,"utf8",(err)=> {
        if(err){
            console.log("Error writing the file",err);
            return;
        }
        console.log("written to the file succesfully");
    });
}

const filePath = "/Users/sshet/Desktop/100xdevs/week1/async-js/easy/write.txt";
const content = "Hi, this is a test content used to write into a file, My name is shashank, nice to meet you";

writeFile(filePath,content);
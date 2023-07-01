function  readFileCallback(filename,callback){
    const fs= require("fs");
    fs.readFile(filename,'utf8',callback);
}

function printText(err,data){
    console.log(data);
}

readFileCallback('a.txt',printText);
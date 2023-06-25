const fs = require('fs');
function call(err,data){
    if(err){
        console.log("mistake");
    }
    else{
        console.log(data);
    }
}

function call1(err){
    if(err){
        console.log("mistake");
    }
    
}
function readfromfile(path){
    fs.readFile(path,"utf-8",call);
}
readfromfile("a.txt");
fs.writeFile("a.txt",'hi',"utf-8",call1);
readfromfile("a.txt");

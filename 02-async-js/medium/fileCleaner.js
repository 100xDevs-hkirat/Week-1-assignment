const fs = require("fs");

// function removes space
function remspace (data){
    let wf = data.split(' ').filter(Boolean).join(' ');
    return wf;
}

// function writes to the medium.txt file
function writing ( err){
    if ( err){
        console.log(err);
        return;
    }
    console.log("Successfully written in a file");
}

// function reads to medium.txt file
function reading (err , data){
    if ( err){
        console.log(err);
        return;
    }
    let str  = remspace ( data);
   fs.writeFile('medium.txt' , str , 'utf-8' , writing);
}

fs.readFile('medium.txt' , 'utf-8' , reading)



const fs = require("fs");
let data = "i have changed something";

function print ( err){
    if ( err){
        console.log(err);
        return;
    }
    console.log("Successfully written in a file");
}

fs.writeFile('hel.txt' , data , 'utf-8' ,print)
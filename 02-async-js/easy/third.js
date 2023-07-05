const fs = require("fs");


function print ( err , data){
    if ( err){
        console.log(err);
        return;
    }
    console.log(data);
}
fs.readFile('hel.txt' , "utf-8" , print)

for (let i=0;i<100;i++){
    console.log(i*i*i);
}


// the text doesn't get printed at the first and it has to wait
// until and unless the loop doesn't end
// thus perfoming an asynchronus task
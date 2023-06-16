const fs = require('fs')

fs.readFile('./dummy.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString()); // assumes utf 8 encoding or you can pass in function
})
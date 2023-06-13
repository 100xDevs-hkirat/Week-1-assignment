const fs = require('fs');

//storing the data to be written into a const 
const data = "trying to write to a file";

fs.writeFile(__dirname+'/file.txt',data,'utf-8',(error)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log("write operation is completed");
})

//write operation is overriding the previous content of the file

const dataTwo = "writing to file without overriding the previous data"

fs.appendFile(__dirname+'/file.txt',dataTwo,'utf-8',(error)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log("file is appended and previous data is not overridden");
})
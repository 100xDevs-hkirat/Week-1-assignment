const fs = require('fs');

//usinf fs module to read to the file __dirname fetches the absolute path of our current directory 
fs.readFile(__dirname+'/file.txt','utf-8',(error,data)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(data);
})

//try to add some code to try out the async capabilities of js

for (let i=0;i<10;i++){
    console.log(i);
}

//the for loop is not blocked due to the read operation

//trying to add an expensive operation to try out the output behaviour


for (let i=0;i<99999;i++){
    console.log(i);
}

//read operation output is visible only after the expensive operation is completed 
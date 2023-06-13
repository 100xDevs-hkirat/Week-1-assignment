const fs = require('fs');

fs.readFile(__dirname+'/file.txt','utf-8',(error,data)=>{
    if(error){
        console.error(error);
        return;
    }

    //used regular expression to remove the extra spaces
    fs.writeFile(__dirname+"/file.txt",data.split(/\s+/).join(' '),'utf-8',(error)=>{
        if(error){
            console.error(error);
            return;
        }
        console.log("file is formatted");
    })
})

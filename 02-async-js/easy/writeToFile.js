// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import fs from 'fs';

const data="i am doing write to file assignment";

fs.writeFile('jsToFile.txt',data,'utf-8',(err)=>{
    if(err){
        console.log("error in writing")
    }
})
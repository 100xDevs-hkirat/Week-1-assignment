const fs = require("fs");

function fileIsRead(err,data){
      if(err){
            console.log(err);
            return;

      }
      console.log(data);
}
fs.readFile('fileRead.txt','utf-8',fileIsRead);

let  counter = 0;

for(let i=0;i<10000000;i++){
      counter = counter + 1;
}

console.log(counter);
const fs = require('fs');

const fileContent = "This is something I am not interested in."


function func(err){
      if(err){
            console.log(error);
      }
      return;
}
fs.writeFile('writeFileText.txt',fileContent,'utf-8',func);
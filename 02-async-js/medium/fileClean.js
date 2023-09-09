const fs = require('fs');


let result ='';

function fileIsRead(err,data){
      if(err){
            console.log(err);
            return;
      }

      const d = data.trim();

      for(let i=0;i<d.length;i++){
            if(d.charAt(i-1) === " " && d.charAt(i) === " "){
                  continue;
            }

            result += d[i]; 
      }
      console.log(result);
}

fs.readFile("fileCleanerText.txt","utf-8",fileIsRead);


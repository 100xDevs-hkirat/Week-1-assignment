const fs = require('fs');


function updateContent(content,filePath){
  content = content.replace(/\s+/g, " ");
  fs.writeFile(filePath,content,(err)=>{
    if(err)return ;
  })
}
function readfilecontent(filePath){

    fs.readFile(filePath,'utf-8',(err,data)=>{
      if(err)return ;
      updateContent(data,filePath);
    })

}

const filePath =
  "d:\\my_codes\\week-1_HW\\Week-1-assignment\\02-async-js\\medium\\1-file-cleaner.txt";


readfilecontent(filePath);
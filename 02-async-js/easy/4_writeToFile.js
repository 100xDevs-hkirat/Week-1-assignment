const fs  = require('fs');

let data = "I am improving day by day. And One day I will become a good developer.";

function printFunction(err){
  if(err){
    console.error(err);
    return;
  }
  console.log('File has been written');

}



fs.writeFile('/Users/shivanshuchauhan/Desktop/Week-1-assignment/02-async-js/easy/hi.txt',data, 'utf8', printFunction);
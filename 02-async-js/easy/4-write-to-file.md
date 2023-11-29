## Write to a file
const fs = require("fs");

function fn(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Succesfull");
  }
}

const data = " I am a web developer"

fs.writeFile("data.txt", data, fn);
var sum = 0;
for(let i = 0; i < 10000000; i++){
  sum+=i;
}
console.log(sum);

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

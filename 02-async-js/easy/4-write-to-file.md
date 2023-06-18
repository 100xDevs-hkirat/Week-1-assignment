## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

var content = 'Have a nice day!';

fs.writeFile('a.txt',content,(error)=>{
 if(error){
  console.log(error);
  return;
 }
 console.log('Writing of File is sucessful');
}
);

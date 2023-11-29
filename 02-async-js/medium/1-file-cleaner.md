## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
const fs = require("fs");
var newData = '';
function fn(err, data){
  if(err){
    console.log(err);
  }
  else{
    for(let i = 0; i < data.length; i++){
      if(data[i] !== ' ' || (i && data[i -1] !== ' ') )newData+=data[i];
  }
    fs.writeFile("data.txt", newData, (err)=>{
      if(err)console.log(err);
      else console.log("Data appended to file.");
    });
}
}

fs.readFile("data.txt", "utf8", fn);
let i = 0;
for (let index = 0; index < 10000000; index++) {
  i++;
}

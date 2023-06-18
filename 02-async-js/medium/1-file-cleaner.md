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
const fs = require('fs');


fs.readFile('sample.txt',(err,data)=>{
  if(err) {
   console.log(err);
   return;
  }
  var content = data.replace('/\s+\g," ").trim();
  console.log(content);
  
  fs.writeFile('sample.txt',content,(err)=>{
  if(err){
   console.log(err);
   return;
  }
  console.log('file overrided successfully');
}
);
  
}
);


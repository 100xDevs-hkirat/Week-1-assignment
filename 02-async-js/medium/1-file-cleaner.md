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
"function sett(str){
    n=str.length;
    d="";
    c=false;
    for(let i=0;i<n;i++){
        if(str[i]==" " && c==true)
        {
            continue
        }
        else if(str[i]==" " && c==false)
        {
            c=true;
            d=d+str[i];
        } 
        else{
            d=d+str[i];
            c=false;
        }
    }
    return d;
}
const fs=require('fs');
var dt=fs.readFile('test.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    fs.writeFile('test.txt',sett(data),'utf8',(err)=>{if(err!=null){console.log(err)}});
})
console.log(dt)"
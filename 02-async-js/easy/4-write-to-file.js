var fs = require("fs")

fs.appendFile("./example.txt","\n Hellow from Sujit... to everyone !","utf-8",(err)=>{
    if(err){
        console.log(err);
    }
})

let sum = 0;
for (let i=1;i<10000;i++){
    sum += i
}

console.log(sum);
const fs = require("fs")
function callbackFn(err,data){
    console.log(data)
}

fs.readFile("a.txt","utf-8",callbackFn)
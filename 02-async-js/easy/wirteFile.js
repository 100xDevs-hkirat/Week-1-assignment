function usingCallback(){
    const fs = require('fs')
    let content = "hii what are you doing?"
    fs.writeFile('02-async-js/easy/data.txt',content,(err)=>{console.log(err);})
}
function usingPromises(){
    const fsProm = require('fs/promises')
    let content = "hii what are you doing?"

    fsProm.writeFile('02-async-js/easy/data.txt',content)
    .then(()=>{
        console.log('success');
    })
    .catch(err=>{
        console.log(err);
    })
}
usingCallback()
usingPromises()
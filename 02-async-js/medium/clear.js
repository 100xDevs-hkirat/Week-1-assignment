
const fs = require('fs/promises')
function cleaner(path){
    fs.readFile(path,'utf8')
    .then((data)=>{
        data = data.replace(/\s+/g,' ')
        return fs.writeFile(path,data,'utf8')
    })
    .then(()=>{
        console.log('sucess');
    })
    .catch(err=>{console.log('error: '+err);})
}

cleaner("02-async-js/medium/data.txt")
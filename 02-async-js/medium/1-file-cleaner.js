let fs = require('fs')
function fileCleaner(file){
    fs.readFile(file,'utf-8',function(err,data){
        if(err){
            console.log("error while reading the file ", err)
            return
        }
        data = data.replace(/[^\S\n]+/g, ' ', " ")
        fs.writeFile(file,data,(err)=>{
            if(err){
                console.log("Error wrting to the file")
                return
            }
            else{
                console.log("Successfully cleaned the file")
            }
        })
    })
    
}

fileCleaner('cleanFile.txt')
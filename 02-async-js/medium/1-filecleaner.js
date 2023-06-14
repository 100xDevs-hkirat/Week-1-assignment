const fs=require('fs')

async function handleFileOperations(){

    console.log("called")
    try{
        let content=await readFile("file.txt");
        content=content.replace(/\s+/g," ").trim()
        console.log("trimmed conent is ",content)
        let updateFile=await writeFile("file.txt",content)
        console.log("update file res",updateFile)


    }catch(err){
        console.log("Error occured ",err)
    }

}

function readFile(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
                console.log("unable to read file")
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
function writeFile(filePath,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,content,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("File updated successfully")
            }
        })
    })
}

handleFileOperations()


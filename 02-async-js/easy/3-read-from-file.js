const fs = require('fs');

function printFile(err, data){

    if(err){
        console.log(err);
        return;
    }
    console.log(data);

}

fs.readFile('file.txt','utf8', printFile);


const fs2 = require('fs/promises');

async function printing(){
try{
    const data = await fs2.readFile('file.txt',{encoding: 'utf8'});
    console.log(data+", this one is async");
}catch(err){
    console.log(err);
}
}

printing();

let count =0;
for(let i =0; i<10000000000; i++){
 count += 1;
}
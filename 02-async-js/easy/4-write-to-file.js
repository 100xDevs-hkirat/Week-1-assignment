const fs = require('fs');

fs.writeFile('./dummy.txt', 'Adding shit', 'utf-8', (err)=>{
    if(err) console.log(err); 
    console.log('done');
    fs.appendFile('./dummy.txt', ' Adding shit', 'utf-8', (err)=>{if(err) console.log(err); console.log('done');});
})

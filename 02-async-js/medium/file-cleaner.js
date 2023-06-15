const fs = require('fs');

const filePath = './a.txt';

let something= '';

fs.readFile(filePath, 'utf8' ,function(err, data){
    if(err){
        console.error(err);
    }

    const contents = data.replace(/\s+/g, ' ').trim();
    const something = contents.split(' ').join(' ');

    fs.writeFile(filePath, something, function(err){
        if(err){
            console.error(err);
        }
        console.log("Data written")
    })
})



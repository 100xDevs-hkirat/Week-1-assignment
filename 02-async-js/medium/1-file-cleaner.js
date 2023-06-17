var fs = require('fs');

fs.readFile('string.txt', 'utf-8', function(err, data){
    if(err){
        console.log(err);
        return;
    }

    data = data.split(/\s+/).join(" ");
    
    fs.writeFile('string.txt', data, 'utf-8', function(err){
        if(err){
            console.log(err);
            return;
        }
    })
})
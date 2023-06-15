const fs = require('fs')


fs.readFile('./1-file-cleaner.md' , 'utf8' , (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log(data)

    const Data = data.replace(/\s+/g, " ")

    console.log("Content Without Extra Spaces:", Data)
    
    fs.appendFile('./1-file-cleaner.md', Data , 'utf8' , (err) => {
        if(err) {
            console.error('Error Writing to file:' , err)
        }
    
    })

    
})

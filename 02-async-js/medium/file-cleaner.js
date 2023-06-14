;const fs = require('fs');

const filePath = 'test2.txt';

fs.readFile(filePath,(error,data) =>{
    if(error){
        console.log("Error while reading a file");
    }
    else{
        const Content = data.toString().replace(/\s+/g, ' ').trim();
        fs.writeFile(filePath, Content, (error) => {
            if (error) {
              console.error('Error writing file:', error);
            } else {
              console.log('File contents modified and written successfully.');
            }
          });
    }
})
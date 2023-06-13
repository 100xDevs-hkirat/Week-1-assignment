const fs = require('fs')
let input = "writing to test file"
fs.writeFile('test.txt', input, (err) => {
   if (err) throw err;
   else{
      console.log("The file is updated with the given data")
   }
})
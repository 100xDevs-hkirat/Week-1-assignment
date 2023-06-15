const fs = require('fs');

fs.readFile('test.txt', (error, data) => {
  if(error) {
    throw new Error();
  }

  cleanContent(data.toString());
});


function cleanContent(content) {
  content = content.replace(/\s+/g, ' ');
  
  fs.writeFile('test.txt', content, (error) => {
    if(error) {
      throw new Error();
    }
  });
}

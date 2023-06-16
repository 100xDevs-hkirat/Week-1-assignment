// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function cleanFile(filePath) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    
    const cleanedContent = data.replace(/\s+/g, ' ').trim();
    
    fs.writeFile(filePath, cleanedContent, 'utf8', (error) => {
      if (error) {
        console.error(error);
        return;
      }
      
      console.log('File has been cleaned successfully.');
    });
  });
}

// Usage
const filePath = 'path/to/your/file.txt';
cleanFile(filePath);

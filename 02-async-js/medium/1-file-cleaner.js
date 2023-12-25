/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman*/

const fs = require('fs');

// Specify the file path
const filePath = 'path/to/your/file.txt';

// Read the content of the file
fs.readFile(filePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading the file:', readErr);
    return;
  }

  // Process the content (remove extra spaces)
  const processedContent = data.replace(/\s+/g, ' ');

  // Write the processed content back to the same file
  fs.writeFile(filePath, processedContent, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing to the file:', writeErr);
      return;
    }

    console.log('File content has been processed and updated successfully!');
  });
});

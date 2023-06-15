const fs = require('fs');

// Read file contents
fs.readFile('./4-write-to-file.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Print file contents
  console.log(data);

  // Perform an expensive operation
  performExpensiveOperation();
});

function performExpensiveOperation() {
  // Simulate an expensive operation
  for (let i = 0; i < 100000000; i++) {
    // Perform some computation
  }

  console.log('Expensive operation completed.');
}

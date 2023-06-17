const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File contents:");
  console.log(data);
});

console.log("Performing an expensive operation...");
expensiveOperation();

// for (let i = 0; i < 5; i++) {
//   expensiveOperation();
// }

function expensiveOperation() {
  const startTime = new Date().getTime();
  while (new Date().getTime() - startTime < 2000) {
    // Busy loop for 2 seconds
  }
  console.log("Expensive operation completed.");
}

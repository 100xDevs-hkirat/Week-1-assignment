const fs = require("fs");

// fs.readFile("/var/log/syslog", "utf-8", (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(data);
// })

const stream = fs.createReadStream("/var/log/syslog", "utf-8");

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Done");
});

stream.on("error", error => {
    console.error(error);
})

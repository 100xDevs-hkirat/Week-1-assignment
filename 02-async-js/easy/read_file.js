const fs = require("fs");

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

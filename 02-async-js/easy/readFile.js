const fs = require("fs");

fs.readFile("./4-write-to-file.md",'utf-8',function (err, data) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(data);
    }
});
for (let index = 0; index < 100; index++) {
   // console.log(index);
}
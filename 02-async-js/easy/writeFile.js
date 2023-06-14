const fs= require("fs");
const content =" Jayant Joshi";
fs.writeFile("./1-counter.md",content, function (err) {
    console.error(err);
});

const fs = require("fs");

const write = (_) => {
    console.log("Starting file writing :)");
    fs.writeFile("./5-write.md", "##Hello, I am generated async from a js on web Api", (err) => {
        console.error(err);
    });
    console.log("End of writing the file :(")
}

write()
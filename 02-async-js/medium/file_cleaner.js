const { error } = require("console");
const fs = require("fs");

fs.readFile("./s.txt", "utf-8", (error, data) => {
    if (error) throw error;

    const modifiedData = data.replace(/[^\S\r\n]+/g, " ");
    fs.writeFile("./sample.txt", modifiedData, 'utf-8', (error) => {
        if (error) throw error;
        console.log("write successful");
    })
    // fs.writeFile("./s.txt", modifiedData, 'utf-8', (error) => {
    //     if (error) throw error;
    //     console.log("write successful");
    // })
})
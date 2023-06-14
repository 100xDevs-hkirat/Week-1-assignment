import fs from 'fs';


let matter = "";

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) console.log("cannot read file");
  else {
    matter = data;
    const arr = matter.split(" ");
    const finalData = arr
      .filter((el) => {
        if (el != " ") return el;
      })
      .join(" ");
    console.log(matter);

    fs.writeFile("data.txt", finalData, (err) => {
      if (err) {
        console.log("cannot write into file");
      } else {
        console.log("file written successfully");
      }
    });
  }
});
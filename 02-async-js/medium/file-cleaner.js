const fs= require("fs");

fs.readFile("a.txt", "utf-8" , (err,data) => {
    if(err) {
        console.log(err);
        return;
    }

    let arr = data.split(" ");
    console.log(data);
    console.log(arr);

    let ansArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== '')
            ansArray.push(arr[i]);
    }
    
    console.log(ansArray);
    let ansString = ansArray.join(" ");
    console.log(ansString);

    fs.writeFile("a.txt", ansString, "utf-8", (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('Done Cleaning');
    
    });
});
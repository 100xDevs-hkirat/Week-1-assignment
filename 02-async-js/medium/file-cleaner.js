const fs = require("node:fs/promises");

( async () => {
    // getting data
    // my complicated way
    // const srcFileHandle = await fs.open('./1-file-cleaner.md', 'r');
    // const srcFileStat = await srcFileHandle.stat();
    // const srcDataBuffer = Buffer.alloc(srcFileStat.size);
    // await srcFileHandle.read(srcDataBuffer, 0, srcFileStat.size, 0);
    // console.log(srcDataBuffer);
    
    const srcData = await fs.readFile('./str.txt', 'utf-8', 'r');
    // converting data in array
    let dataStringArr = srcData.split(' ');
    // cleaning
    for(let i = dataStringArr.length-1; i>=0; i--) {
        if (!dataStringArr[i]) dataStringArr.splice(i, 1);
    }
    // writing
    fs.writeFile('./str.txt', dataStringArr.join(' '));

})();
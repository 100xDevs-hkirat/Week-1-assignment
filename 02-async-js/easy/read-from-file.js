const fs = require('node:fs/promises');

( async () => {
    //creating large data file
    let n = 1e6;
    const dataFileHandle = fs.open('./data.txt', "w");
    for(let i = 0; i<n; i++) {
        (await dataFileHandle).write(` ${i} `);
    }
    (await dataFileHandle).close();
    
    // printing large data to console
    const data = await fs.readFile('./data.txt', 'utf-8');
    console.log(data);
})();
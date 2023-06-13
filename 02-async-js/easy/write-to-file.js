const fs = require('node:fs/promises');

( async () => {
    const fileHandle = await fs.open("./data.txt", "w");

    for(let i = 0; i<1e4; i++) {
        await fileHandle.write(` ${i} `, "utf-8");
    }

    fileHandle.close(); // no need for await here, cause there are no further operations
})();
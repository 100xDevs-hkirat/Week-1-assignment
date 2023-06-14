const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'unCleanedFile.txt');

const sanitize = (line) => {
    const wordArr = line.split(' ');

    const result = wordArr.reduce(
        (res, word) => (word.trim().length > 0 ? res + ' ' + word : res),
        ''
    );

    return result.trim();
};

const errorCB = (err) => {
    if(err){
        console.log(`[Error]: ${err}`)
    }
} 

const writeToFile = async (filePath, lines) =>{
        const y = await fs.writeFile(filePath,'',errorCB)
        
        let firstLine = true

        for (let line of lines){
            if(firstLine){
                firstLine = false
            } else {
                line = '\n'+line
            }
            const xs = await fs.appendFile(filePath, line, 'utf-8', errorCB)
        }
}

const readLineByLine = async () => {
    const lines = [];
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream(filePath),
        });

        for await (const line of rl) {
            const sanitizedLine = sanitize(line)
            lines.push(sanitizedLine)
        }

        rl.close()

        writeToFile(filePath,lines)
        
    } catch (err) {
        console.log(`[Error]: ${err}`);
    }
};

readLineByLine();

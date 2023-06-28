const fs = require('fs/promises');

const writeFile = async(filename)=>{

    try {
        await fs.writeFile(filename ,'Hello my name is abhimanyu yadav and want to say one thing 1')
    } catch (error) {
        console.error(error)
    }
}

writeFile('a.txt')
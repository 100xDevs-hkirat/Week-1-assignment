const fs = require('fs/promises');

const removeSpaces = async(filename)=>{

    try {
        const data = await fs.readFile(filename, 'utf8');
        const newData =  data.replace(/\s+/g,' ')
        
        await fs.writeFile(filename, newData)

    } catch (error) {
        console.error(error)
    }

   
}

removeSpaces('./remove.txt')

const fs = require('fs/promises')

fs.readFile("data.txt", 'utf8')
.then(
	data => fs.writeFile("file.txt", data)
)
.catch(
	err => console.log(err)
)
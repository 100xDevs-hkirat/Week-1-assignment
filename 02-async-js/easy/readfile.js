function usingCallback(){
    const fs = require('fs');
	fs.readFile("02-async-js/easy/a.txt", 'utf8', (data, err) => {
		if(data) console.log(data);
		else console.log(err);
	});
}
function usingPromises(){
    const fsProm = require('fs/promises')
    fsProm.readFile("02-async-js/easy/a.txt", 'utf8')
    .then((data)=>console.log('data- '+data))
    .catch((err)=>console.log('error'+err))
}
// usingCallback()
usingPromises()
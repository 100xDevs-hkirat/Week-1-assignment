const fs = require('fs');

fs.readFile('./dummy.txt', 'utf-8', (err, data) => {
    if (err) console.error(err);
    const st = data;
    const toWrite = [];
    let i = 0;
    while (i < st.length) {
        if(st[i]==' '){
            i+= 1;
            continue;
        }
        let word = "";
        while (i < st.length && st[i]!=' '){
            word += st[i];
            i += 1;
        }
        toWrite.push(word);
    }
    const res = toWrite.join(" ");
    fs.writeFile('./dummy.txt',res,'utf-8',(err)=>{
        if(err) throw err;
        console.log('done');
    })
})
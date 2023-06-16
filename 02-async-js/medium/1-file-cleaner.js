const fs = require('fs/promises')

fs.readFile('input.txt', 'utf8').then(function (data) {
    let content = clean(data)
    fs.writeFile('input.txt', content, 'utf8').then(function (err) {
        // console.log("Error")
    })
})


function clean(content) {
    let newContent = content.split(" ")
    let filteredContent = newContent.filter((word) => word.length > 0)
    return filteredContent.join(" ")
}
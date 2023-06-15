
let counter = 0;

function printCounter() {
    console.clear()
    console.log(counter)
    counter += 1
}

setInterval(printCounter, 1000)

console.log(counter)

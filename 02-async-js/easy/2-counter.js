
let count = 1

function counter() {
    console.log(count++)

}

function increment() {
    setTimeout(function () {
        counter()
        increment()
    }, 1000)
}

increment()



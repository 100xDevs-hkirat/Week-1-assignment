let count = 0;

function counterFunction() {
    setInterval(() => {
        console.log(count)
        count += 1
    }, 1000)
}
counterFunction()
function counter() {
    let counter = 0;

    setTimeout(() => {
        counter++;
    }, 1000);
}

module.exports = counter;
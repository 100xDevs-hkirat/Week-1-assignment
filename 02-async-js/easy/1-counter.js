function incrementCounter(callback) {
    let counter = 0;

    setInterval(() => {
        counter++;
        callback()
    }, 1000);
};

module.exports = incrementCounter;


function counter(count, duration) {
    console.log(count)
    if (count < duration) {
        setTimeout(() => counter(count + 1, duration), 1000)
    }
}

counter(0, 10)
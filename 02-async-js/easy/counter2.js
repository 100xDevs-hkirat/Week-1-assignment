const helper = (count) => {
    setTimeout(() => {
        console.log(count)
        helper(count+1)
    }, 1000)
}

const counter = () => {
    let count = 0
    helper(count)
}

counter()
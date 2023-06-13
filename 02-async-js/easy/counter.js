let count = 0;

function counter(n) {
    let count = 0;
    const interval = setInterval(() => {
        console.log(++count);
        if(count === n) clearInterval(interval);
        
    }, 1000);
}

counter(10);

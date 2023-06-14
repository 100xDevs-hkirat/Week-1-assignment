var count=0;
setInterval(() => {
    console.log(count++);
    setTimeout(() => {
        console.clear();
    }, 1000);
}, 1000);
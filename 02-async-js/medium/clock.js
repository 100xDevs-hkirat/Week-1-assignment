function clock(options) {
    let count = Date.now();
    options = {
        ...{ hour12:true, hour:'2-digit', minute:'2-digit', second:'2-digit' },
        ...options
    }
    setInterval(() => {
        const date = new Date(count += 1000);
        console.log(date.toLocaleTimeString('en-IN',options));
    }, 1000);
}

clock({ hour12:true });



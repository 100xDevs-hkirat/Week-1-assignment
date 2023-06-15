
let Countdown = (counter)=>{
    let interval = setInterval(function(){
    console.log(counter);
    counter--
    if (counter === 0) {
        clearInterval(interval);
    }
    }, 1000)
}

Countdown(5)
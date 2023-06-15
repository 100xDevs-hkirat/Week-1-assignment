## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function Counter(counter){
    console.log(counter);
    counter++
    setTimeout(() => {
        starCounter(counter)
    },1000);
}

Counter(0)
































































(Hint: setTimeout)
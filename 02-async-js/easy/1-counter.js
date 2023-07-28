// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 secon

export default function startCounter(interval)
{
    var t = 0;
    const clock = setInterval(() => {
        var date = new Date().toLocaleTimeString('en', {'hour':'2-digit', 'minute':'2-digit', 'second':'2-digit'});
        console.log("-- "+date+" --");

        if(++t == interval)
        {
            clearInterval(clock);
        }
    }, 1*1000);
}
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

-setTimeout schedules the execution of a function once, after a specified delay.
-setInterval schedules the repeated execution of a function at a specified interval, with a constant delay between each execution.

let counter=0;
function incrementcounter(){
    counter++;
    console.log(counter);
    setTimeout(incrementcounter,1000);

}
incrementcounter();






































































(Hint: setTimeout)
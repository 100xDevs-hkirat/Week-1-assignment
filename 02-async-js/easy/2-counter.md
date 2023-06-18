## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var counter = 0;

function recurse(){
 console.clear();
 console.log(counter);
 counter++;
 setTimeout(recurse,1000);
 
}

setTimeout(recurse,1000);


































































(Hint: setTimeout)

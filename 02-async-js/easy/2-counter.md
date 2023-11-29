## Counter without setInterval
var counter = 0;
function fn(){
  counter++;
  console.log(counter + " seconds have passed");
  setTimeout(fn, 1000)
}



setTimeout(fn, 1000);
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































(Hint: setTimeout)

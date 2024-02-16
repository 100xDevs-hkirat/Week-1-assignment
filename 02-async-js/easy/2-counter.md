## Counter without setInterval

var cnt=0;
function stopwatch(){
  cnt++;
  console.log(cnt);
helper();
  
}
function helper(){
setTimeout(stopwatch,1000);
}
helper();
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































(Hint: setTimeout)

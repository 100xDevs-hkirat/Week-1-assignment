// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->

var c=0;
function time(){
  console.clear();
  console.log(c);
  c++;
  setTimeout(time,1000);
}
setTimeout(time,1000);































































<!-- ## Counter without setInterval -->

<!-- Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->

let count = 0;

function incrementCount() {
  count++;
  console.log(count);
}


  

setTimeout(()=>{
  incrementCount()
  setTimeout(()=>{
    incrementCount();
    setTimeout(()=>{
  incrementCount()
  setTimeout(()=>{
    incrementCount()
  }, 1000);
}, 1000);
  }, 1000);
}, 1000);








































































(Hint: setTimeout)

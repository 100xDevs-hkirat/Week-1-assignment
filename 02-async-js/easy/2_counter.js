// Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

var count= 0;
function Counter(){
    
    count++;
    console.log(count);
    setTimeout(Counter, 1000);
}
for(i=0; i<10000000000000; i++){

    
    
}


/*function Counter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(count); // You can replace this with your desired action
      if (count < 10) {
        setTimeout(increment, 1000); // Increase the counter every second
      }
    }
  
    increment(); // Start the counter
  }
  
  Counter();*/
  




































































//(Hint: setTimeout)
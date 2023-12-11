/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/





function calculateTime(n){
    //Record the start time
    const startTime = new Date().getTime();
  
     //calculate from 1 to n
   var sum=0;
    for(let i=1;i<=n;i++){
      sum+=i;
    }
    //return sum;
  
    //Record the end time
    const endTime = new Date().getTime();
  
    //Calculate the time difference in seconds
    const timeInSeconds = (endTime - startTime)/1000;
  
    return timeInSeconds;
  
  }
  
  
  console.log('Sum from 1-1000= ',calculateTime(100),'seconds');
  
  console.log('Sum from 1-100000=',calculateTime(100000),'seconds');
  
  console.log('Sum from 1-1000000000= ',calculateTime(1000000000),' seconds');
  
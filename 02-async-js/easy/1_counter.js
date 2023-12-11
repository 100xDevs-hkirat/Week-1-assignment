var counter =1;

function printAndIncreaseCount(){
  console.clear();
  console.log(counter);
  counter++;
}



setInterval(printAndIncreaseCount, 1000);

var counter = 1;

function printAndIncrease(){
  console.clear();
  console.log(counter);
  counter++;

}

for(let i =1;i<=1000;i++){
  setTimeout(printAndIncrease,i*1000);
}
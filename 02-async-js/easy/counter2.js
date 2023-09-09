var counter = 1;

function counter2(){
      console.clear();
      console.log(counter);
      counter = counter + 1;
      setTimeout(counter2,1000);

}

setTimeout(counter2,1000);

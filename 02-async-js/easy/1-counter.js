
let counter = 0;

 

function updateCounter() {

  counter++;

  console.log("Counter:", counter);

}

 

const interval = setInterval(updateCounter, 1000);
let counter = 0;

 

function updateCounter() {

  counter++;

  console.log("Counter:", counter);

  setTimeout(updateCounter, 1000); // Call updateCounter again after 1 second

}

 

// Start the counter

updateCounter();

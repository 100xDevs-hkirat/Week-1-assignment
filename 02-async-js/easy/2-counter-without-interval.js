function updateCounter() {
    // Update counter logic here
    console.log(counter);
    
    // Recursive call after 1 second
    setTimeout(updateCounter, 1000);
  }
  
  // Initialize counter variable
  let counter = 0;
  
  updateCounter();
  
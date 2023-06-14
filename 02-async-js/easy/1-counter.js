// Set the initial counter value
let counter = 0;

// Function to update the counter
function updateCounter() {
  counter++;
  console.log(counter);
}

// Update the counter every second
setInterval(updateCounter, 1000);
/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. */

function updateCounter() {
    //Clear console
    console.clear();
    // Update counter logic here
    console.log(counter);

    //update counter
    counter += 1;

    // Recursive call after 1 second
    setTimeout(updateCounter, 1000);
  }

  // Initialize counter variable
  let counter = 0;

  // Start the counter
  updateCounter();

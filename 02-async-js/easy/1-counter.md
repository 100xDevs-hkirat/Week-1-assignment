## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

function startCounter() {
  let count = 0;

  function incrementCounter() {
    count++;
    console.log(count);
  }

  // Start the counter
  const intervalId = setInterval(incrementCounter, 1000);

  // Stop the counter after 10 seconds (for demonstration purposes)
  setTimeout(() => {
    clearInterval(intervalId);
  }, 10000);
}

// Start the counter
startCounter();

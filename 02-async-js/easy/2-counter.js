// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function repetiveCallback() {
  let count = 0;

  function executeCallback() {
    count = count + 1;
    console.log(count);
    setTimeout(executeCallback, 1000);
  }

  executeCallback();

  return count;
}

const counts = repetiveCallback();
console.log(counts);

// (Hint: setTimeout)

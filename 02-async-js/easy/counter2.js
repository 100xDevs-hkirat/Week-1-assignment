let counter = 0;

function run() {
  console.clear();
  console.log(counter);
  counter++;
  setTimeout(run, 1 * 1000);
}

run();

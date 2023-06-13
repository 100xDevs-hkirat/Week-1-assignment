let counter = 0;

const printTime = () => {
  console.clear();
  console.log(counter);
  counter += 1;
};

setInterval(printTime, 1000);

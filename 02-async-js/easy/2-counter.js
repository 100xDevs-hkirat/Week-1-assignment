let counter = 1;
const printTime = () => {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(printTime, 1000);
};

setTimeout(printTime, 1000);

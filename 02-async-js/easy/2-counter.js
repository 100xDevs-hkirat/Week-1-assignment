let counter = 1;
const printCounter = () => {
  console.clear();
  console.log(counter++);
  setTimeout(printCounter, 1000);
};

printCounter();

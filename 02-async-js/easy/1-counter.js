let timeCounter = 1;
const counter = () => {
  console.clear();
  console.log(timeCounter++);
};

setInterval(counter, 1000);

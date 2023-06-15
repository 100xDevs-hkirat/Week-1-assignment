let count = 1;

const start = () => {
  setTimeout(() => {
    console.clear();
    console.log(count++);
    start();
  }, 1000);
};

start();

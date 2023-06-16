const timer = async (n) => {
  const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
  for (let i = 0; i < n; i++) {
    console.log(i);
    await sleep();
  }
};

timer(n);

function startCounter(initialValue, delay) {
    console.log(initialValue);
    
    const nextValue = initialValue + 1;
    
    setTimeout(() => {
      startCounter(nextValue, delay);
    }, delay);
  }
  
  // Usage
  startCounter(0, 1000);
  
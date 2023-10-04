const calculateSumTime = require('./times');

const nValues = [100, 100000, 1000000000];

nValues.forEach(n => {
  const totalTimeInSeconds = calculateSumTime(n);
  console.log(`Time taken to calculate sum from 1 to ${n}: ${totalTimeInSeconds} seconds`);
});  
 
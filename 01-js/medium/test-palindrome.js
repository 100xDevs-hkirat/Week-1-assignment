const isPalindrome = require('./palindrome');

  // Test cases
  const testCases = [
    'Nan',
    'racecar',
    'hello',
    'world',
    // Add more test cases here
  ];
 
  // Run the tests and display results
  testCases.forEach(testCase => {
    const result = isPalindrome(testCase);
    console.log(`${testCase} is a palindrome: ${result}`);
  });
  
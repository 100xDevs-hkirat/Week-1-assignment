const isPalindrome= require('../medium/palindrome.js');

test('should return true for valid palindrome', () => {
  expect(isPalindrome('madam')).toBe(true);
});

test('should return false for invalid palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});

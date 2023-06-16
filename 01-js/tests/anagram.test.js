const isAnagram = require('../easy/anagram.js');

test('should return true for valid anagrams', () => {
  expect(isAnagram('listen', 'silent')).toBe(true);
});

test('should return false for invalid anagrams', () => {
  expect(isAnagram('hello', 'world')).toBe(false);
});

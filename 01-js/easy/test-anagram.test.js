const isAnagram = require('./anagram');

describe('isAnagram', () => {
  it('should return true for anagrams', () => {
    expect(isAnagram('lion', 'ionl')).toBe(true);
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('acts', 'cats')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('apple', 'banana')).toBe(false);
    expect(isAnagram('abc', 'abcd')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isAnagram('LiOn', 'IoNl')).toBe(true);
  });

  it('should work with empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });
});
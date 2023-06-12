const isPalindrome = require('../medium/palindrome');

describe('isPalindrome', () => {
	test('returns true for palindromes', () => {
		expect(isPalindrome('level')).toBe(true);
		expect(
			isPalindrome('A man, a plan, a canal. Panama')
		).toBe(true);
		expect(isPalindrome('racecar')).toBe(true);
		expect(isPalindrome('Nan')).toBe(true);
		expect(isPalindrome('')).toBe(true);
	});

	test('returns false for non-palindromes', () => {
		expect(isPalindrome('hello')).toBe(false);
		expect(isPalindrome('openai')).toBe(false);
		expect(isPalindrome('abcde')).toBe(false);
	});
});

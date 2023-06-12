const isAnagram = require('../easy/anagram');

describe('isAnagram', () => {
	test('returns true for anagrams', () => {
		expect(isAnagram('listen', 'silent')).toBe(true);
		expect(isAnagram('rail safety', 'fairy tales')).toBe(
			true
		);
		expect(isAnagram('openai', 'aiopen')).toBe(true);
		expect(isAnagram('', '')).toBe(true);
	});

	test('returns false for non-anagrams', () => {
		expect(isAnagram('hello', 'world')).toBe(false);
		expect(isAnagram('openai', 'open')).toBe(false);
		expect(isAnagram('hello', 'lhel')).toBe(false);
		expect(isAnagram('working', 'non')).toBe(false);
	});
});

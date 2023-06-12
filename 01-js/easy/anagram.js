/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
const solve = (str1, str2) => {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	const m = new Set();

	for (let i of str1) {
		m.add(i);
	}

	for (let i of str2) {
		if (m.has(i)) {
			m.delete(i);
		}
	}

	return m.size == 0;
};
function isAnagram(str1, str2) {
	if (str1.length > str2.length) return solve(str1, str2);
	return solve(str2, str1);
}

module.exports = isAnagram;

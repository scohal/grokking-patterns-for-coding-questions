/**
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 * Input: String="abbcabc", Pattern="abc"
 * Output: [2, 3, 4]
 */

const findAnagrams = (str, pattern) => {
  const resultIndicies = [];

  const charFreqMap = pattern.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // when we encounter a character, decrement it in the freq map
    const char = str[windowEnd];
    charFreqMap[char] = (charFreqMap[char] || 0) - 1;
    if (charFreqMap[char] === 0) delete charFreqMap[char];

    if (windowEnd - windowStart + 1 > pattern.length) {
      // window is too large, shrink it
      const char = str[windowStart];
      charFreqMap[char] = (charFreqMap[char] || 0) + 1;
      if (charFreqMap[char] === 0) delete charFreqMap[char];
      windowStart++;
    }

    // found an anagram
    if (Object.keys(charFreqMap).length === 0) {
      resultIndicies.push(windowStart);
    }
  }

  return resultIndicies;
};

console.log(findAnagrams("ppqp", "qp")); // [1, 2]
console.log(findAnagrams("abbcabc", "abc")); // [2, 3, 4]

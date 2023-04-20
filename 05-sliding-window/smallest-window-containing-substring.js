/**
 * Given a string and a pattern, find the smallest substring in
 * the given string which has all the character occurrences of
 * the given pattern.
 */

const smallestSubstring =  (str, pattern) => {
  // map pattern character frequency to an object
  const freqMap = pattern.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  let savedSubstring = '';

  // grow the window (substring)
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    // when we add a character in `str` to the window, we SUBTRACT it from the frequency map
    if (freqMap[char] !== undefined) freqMap[char] -= 1;

    // when every character frequency is <= 0, we have a valid window/substring
    while (Object.values(freqMap).every(freq => freq <= 0)) {
      const substring = str.slice(windowStart, windowEnd + 1);
      if (savedSubstring === '' || substring.length < savedSubstring.length) {
        savedSubstring = substring;
      }
      
      // try to shrink the window
      // when we remove a character from the window, we ADD it back to the frequency map
      const char = str[windowStart];
      if (freqMap[char] !== undefined) freqMap[char] += 1;
      windowStart++
    }
  }
  return savedSubstring;
};

console.log(smallestSubstring("aabdec", "abc")) // "abdec" 
console.log(smallestSubstring("aabdec", "abac")) // "aabdec" 
console.log(smallestSubstring("abdbca", "abc")) // "bca" 
console.log(smallestSubstring("adcad", "abc")) // "" (No valid substring exists)

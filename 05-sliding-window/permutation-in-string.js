/**
 * Given a string and a pattern, find out if the string
 * contains any permutation of the pattern.
 *
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 *
 *
 * Input: String="odicf", Pattern="dc"
 * Output: false
 * Explanation: No permutation of the pattern is present in the given string as a substring.
 */

const permutationInString = (str, pattern) => {
  // use the sliding window pattern
  // the window will have a fixed width equal to the width of `pattern`
  let substring = "";

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    substring += str[windowEnd];

    if (substring.length === pattern.length) {
      if (isPermutation(substring, pattern)) {
        console.log(`The substring is "${substring}"`);
        return true;
      }
      // shrink the window
      substring = substring.slice(1);
      windowStart += 1;
    }
  }

  return false;
};

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length)
    throw new Error("Strings are not same length");

  while (str1.length) {
    const char = str1[0];
    const i = str2.indexOf(char);

    str1 = str1.slice(1);
    str2 = str2.slice(0, i) + str2.slice(i + 1);
  }
  return str1 === "" && str2 === "";
};

console.log(permutationInString("oidbcaf", "abc")); // true ('bca')
console.log(permutationInString("oidbcaf", "fac")); // true ('caf')
console.log(permutationInString("abcde", "edcba")); // true ('abcde')
console.log(permutationInString("bcdxabcdy", "bcdyabcdx")); // true ('bcdxabcdy')

console.log(permutationInString("odicf", "dc")); // false


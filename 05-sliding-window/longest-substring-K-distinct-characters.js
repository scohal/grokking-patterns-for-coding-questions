/**
 * Given a string, find the length of the longest substring
 * in it with no more than K distinct characters.
 *
 * You can assume that K is less than or equal to the length
 * of the given string.
 *
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2'
 * distinct characters is "araa".
 *
 * Input: String="araaci", K=1
 * Output: 2
 * Explanation: The longest substring with no more than '1'
 * distinct characters is "aa".
 *
 * Input: String="cbbebi", K=3
 * Output: 5
 * Explanation: The longest substrings with no more than '3'
 * distinct characters are "cbbeb" & "bbebi".
 */

// const longestSubstringKDistinct = (str, K) => {
//     let maxLength = 0;
//     let start = 0;
//     let charsEncountered = {}; // cache

//     for (let end = 0; end < str.length; end++) {
//         // add the character to the cache
//         const char = str[end];
//         charsEncountered[char] = (charsEncountered[char] || 0) + 1;

//         let numDistinct = Object.keys(charsEncountered).length;
//         if (numDistinct <= K) {
//             maxLength = Math.max(maxLength, end - start + 1);
//         }

//         // number of distinct chars exceed, shrink window
//         while (numDistinct > K) {
//             charsEncountered[str[start]] -= 1;
//             if (charsEncountered[str[start]] === 0) {
//                 delete charsEncountered[str[start]];
//                 numDistinct -= 1;
//             }
//             start += 1; // shrink window from left
//         }
//     }

//     return maxLength;
// };

const longestSubstringKDistinct = (str, K) => {
  if (K < 1) throw new Error("K must be 1 or greater");

  const charMap = {};
  let substring = '';
  let maxLength = 0;

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    charMap[char] = (charMap[char] || 0) + 1;

    // if there are greater than K unique characters, shrink the window and update the set
    while (Object.keys(charMap).length > K) {
      // console.log({windowStart, windowEnd, length: Object.keys(charMap).length, substring})
      // shrink the window
      const char = str[windowStart];
      charMap[char] -= 1;
      if (charMap[char] === 0) delete charMap[char]; 
      windowStart += 1;
    }  

    // if there are less or equal to K unqiue characters, update the substring
    if (Object.keys(charMap).length <= K) {
      const currentLength = windowEnd - windowStart + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        substring = str.slice(windowStart, windowEnd + 1);
      }
    }
  }

  console.log(`The longest substring with ${K} or less unique characters is ${substring}`);
  return maxLength;
};

console.log(longestSubstringKDistinct("araaci", 2)); // 4 (from 'araa')
console.log(longestSubstringKDistinct("araaci", 1)); // 2 (from 'aa')
console.log(longestSubstringKDistinct("cbbebi", 3)); // 5 (from 'cbbeb' or 'bbebi')
console.log(longestSubstringKDistinct("iiii", 3)); // 4 (from 'iiii')
console.log(longestSubstringKDistinct("iiii", 1)); // 4 (from 'iiii')

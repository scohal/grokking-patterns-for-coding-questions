/**
 * Given a string with lowercase letters only, if you are
 * allowed to replace no more than ‘k’ letters with any
 * letter, find the length of the longest substring having
 * the same letters after replacement.
 * 
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest
 * repeating substring "bbbbb".
 * 
 * Input: String="abbcb", k=1
 * Output: 4
 * Explanation: Replace the 'c' with 'b' to have a longest
 * repeating substring "bbbb".
 * 
 * Input: String="abccde", k=1
 * Output: 3
 * Explanation: Replace the 'b' or 'd' with 'c' to have the
 * longest repeating substring "ccc".
 */

/**
 * Strategy: 
 * - use sliding window pattern
 * - use a cache to store frequency characters encountered
 * - the sum of values of least frequent characters cannot
 *   exceed K:
 * 
 * For example, if K is 3:
 * If the cache looks like {'a': 5, 'b': 1, 'c': 2}
 * This means we can replace 1 'b' and 2 'c's to have a
 * valid string of length 8. 
 */

const longestSubstringAfterReplacement = (str, K) => {
    let longestSubstring = '';
    let maxLength = 0;
    let cache = {};
    let start = 0;

    for (let end = 0; end < str.length; end++) {
        // add character to cache
        cache[str[end]] = (cache[str[end]] || 0) + 1;

        // shrink window until valid substring is found
        while(longestPossibleSubstring(cache, K) === -1) {
            cache[str[start]] -= 1;
            if (cache[str[start]] === 0) delete cache[str[start]];
            start += 1;
        }

        // update maxLength if we found a bigger length
        const length = end - start + 1;
        if (length > maxLength) {
            longestSubstring = str.slice(start, end + 1);
            maxLength = length;
        }
    }
    console.log(`The longest substring having all the same characters
                 after replacing no more than ${K} characters is ${longestSubstring}`);
    return maxLength;
};

const longestPossibleSubstring = (cache, K) => {
    // If all but the most frequent character in cache
    // have a sum exceeding K, that means it is impossible 
    // to replace 'K' characters to get a string of all
    // same characters. In this case, return -1.

    // sort the values in decreasing order
    const values = Object.values(cache);
    if (values.length === 1) return values[0]; // there is only one unique char
    values.sort((a, b) => b - a);

    const lessFrequent = values.slice(1);
    lessFrequent.push(0); // in case it was an empty array,
                          // add one element so we don't get
                          // an error when we reduce
    const numCharsToReplace = lessFrequent.reduce((sum, e) => sum + e);

    if (numCharsToReplace > K) return -1; // can't create a string of all same chars

    return values[0] + numCharsToReplace;
};

console.log(longestSubstringAfterReplacement('aabccbb', 2)); // 5 ('bccbb' -> 'bbbbb')
console.log(longestSubstringAfterReplacement('abbcb', 1)); // 4 ('bbcb' -> 'bbbb')
console.log(longestSubstringAfterReplacement('abccde', 1)); // 3 ('bcc' -> 'ccc')
console.log(longestSubstringAfterReplacement('#aaaaaaaaa', 1)); // 10
console.log(longestSubstringAfterReplacement('#aaaaaaaaa', 0)); // 9
console.log(longestSubstringAfterReplacement('#aaaaaaaa?', 2)); // 10
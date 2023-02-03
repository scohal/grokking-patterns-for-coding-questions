/**
 * Given a string, find the length of the longest substring,
 * which has all distinct characters.
 * 
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring with distinct characters is "abc".
 * 
 * Input: String="abbbb"
 * Output: 2
 * Explanation: The longest substring with distinct characters is "ab".
 * 
 * Input: String="abccde"
 * Output: 3
 * Explanation: Longest substrings with distinct characters are
 * "abc" & "cde".
 */

const longestSubstringDistinctChars = str => {
    let maxLength = 0;
    let longestSubstring = '';
    let cache = {};
    let start = 0;

    for (let end = 0; end < str.length; end++) {
        cache[str[end]] = (cache[str[end]] || 0) + 1;
        
        // if any character has appeared more than once, allOnes will return false
        while(!allOnes(Object.values(cache))) { // shrink window from left until all values are distinct
            cache[str[start]] -= 1;
            if (cache[str[start]] === 0) delete cache[str[start]];
            start += 1;
        }

        // update maxLength
        const length = end - start + 1;
        if (length > maxLength) {
            maxLength = length;
            longestSubstring = str.slice(start, end + 1);
        }
    }
    console.log(`The longest substring with all distinct characters is '${longestSubstring}'.`);
    return maxLength;
};

const allOnes = arr => {
    return arr.reduce((acc, e) => acc & (e === 1), true);
};

console.log(longestSubstringDistinctChars('aabccbb')); // 3 (from 'abc')
console.log(longestSubstringDistinctChars('abbbb')); // 2 (from 'ab')
console.log(longestSubstringDistinctChars('abccde')); // 3 (from 'abc' or 'cde')
console.log(longestSubstringDistinctChars('abcdef')); // 6
console.log(longestSubstringDistinctChars('')); // 0
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
    const windowSize = pattern.length;
    let substr = '';

    for (let i = 0; i < str.length - windowSize + 1; i++) {
        substr = str.slice(i, i + windowSize);
        // if the substring length is not equal to the window size, the isPermutation function 
        // is not called (because of short-circuit evaluation)
        if(isPermutation(substr, pattern)) {
            console.log(`The substring '${substr}' is a permutation of the pattern '${pattern}'.`);
            return true;
        }
    }
    console.log(`No permutations of '${pattern}' were found in the string '${str}'.`);
    return false;
}

const isPermutation = (str1, str2) => {
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    arr1.sort();
    arr2.sort();
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};

console.log(permutationInString('oidbcaf', 'abc')); // true ('bca')
console.log(permutationInString('oidbcaf', 'fac')); // true ('caf')
console.log(permutationInString('odicf', 'dc')); // false
console.log(permutationInString('abcde', 'edcba')); // true ('abcde')
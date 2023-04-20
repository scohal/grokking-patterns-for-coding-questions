/**
 * Given a string and a list of words, find all the starting indices of substrings
 * in the given string that are a concatenation of all the given words exactly once
 * without any overlapping of words. It is given that all words are of the same length.
 */

const findConcat = (str, words) => {
  // create a frequency map of the words
  const wordsFrequency = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {}); 

  const numWords = words.length;
  const wordLength = words[0].length;
  const result = [];
  
  for (let start = 0; start <= str.length - (numWords * wordLength); start++) {
    const foundFrequency = {};
    const substring = str.slice(start, start + (numWords * wordLength));
    
    let isValid = true;
    for (let i = 0; i < numWords * wordLength; i += wordLength) {
      const str = substring.slice(i, i + wordLength);

      // not a word in `words`
      if (wordsFrequency[str] === undefined) {
        isValid = false;
        break;
      }

      foundFrequency[str] = (foundFrequency[str] || 0) + 1;

      // found too many of this word, so the substring cannot be valid
      if (foundFrequency[str] > wordsFrequency[str]) {
        isValid = false;
        break;
      }
    }
    if (isValid) result.push(start);
  }

  return result;

};

const fruitFrequency = {
  "apples" : 1,
  "bananas" : 2,
  "coconuts" : 1,
}

--fruitFrequency["apples"] === 0 ? (delete fruitFrequency["apples"]) : null;
console.log(fruitFrequency)



// console.log(findConcat("catfoxcat", ["cat", "fox"])) // [0, 3]
// console.log(findConcat("catcatfoxfox", ["cat", "fox"])) // [3]
// console.log(findConcat("catdogfoxcat", ["cat", "fox", "dog"])) // [0, 3]
// console.log(findConcat("zcatoy", ["cat", "toy"])) // []
// console.log(findConcat("zcattoycat", ["cat", "toy"])) // [1, 4]
// console.log(findConcat("catcatcattoy", ["cat", "toy"])) // [6]


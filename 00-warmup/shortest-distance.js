/**
 * Given an array of strings words and two different strings that
 * already exist in the array word1 and word2, return the shortest
 * distance between these two words in the list.
 */

const shortestDistance = (words, word1, word2) => {
  let shortestDist = words.length;
  let p1 = -1;
  let p2 = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) p1 = i;
    if (words[i] === word2) p2 = i;

    if (p1 !== -1 && p2 !== -1) {
      shortestDist = Math.min(Math.abs(p1 - p2), shortestDist);
    }
  }

  return shortestDist;
}

// Test case 1
const words1 = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
const word11 = "fox";
const word21 = "dog";
const expectedOutput1 = 5;
const actualOutput1 = shortestDistance(words1, word11, word21);
console.log("Test case 1:", expectedOutput1 === actualOutput1);

// Test case 2
const words2 = ["a", "b", "c", "d", "a", "b"];
const word12 = "a";
const word22 = "b";
const expectedOutput2 = 1;
const actualOutput2 = shortestDistance(words2, word12, word22);
console.log("Test case 2:", expectedOutput2 === actualOutput2);

// Test case 3
const words3 = ["a", "c", "d", "b", "a"];
const word13 = "a";
const word23 = "b";
const expectedOutput3 = 1;
const actualOutput3 = shortestDistance(words3, word13, word23);
console.log("Test case 3:", expectedOutput3 === actualOutput3);

// Test case 4
const words4 = ["a", "b", "c", "d", "e"];
const word14 = "a";
const word24 = "e";
const expectedOutput4 = 4;
const actualOutput4 = shortestDistance(words4, word14, word24);
console.log("Test case 4:", expectedOutput4 === actualOutput4);

/***
Given two strings containing backspaces (identified by the character ‘#’),
check if the two strings are equal.

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
*/

// Method:
// Traverse the two strings from the last character.
// Skip over any '#' character and the character to its left.
// Compare the current char in str1 to the current char in str2:
    // If they are different, return false.
    // If they are the same, continue traversing.
// If we reach the beginning of both strings at the same time, return true.

/*** LOOPING SOLUTION ***/

const backspaceCompare = (str1, str2) => {
  let p1 = str1.length - 1;
  let p2 = str2.length - 1;

  while (p1 >= 0 || p2 >= 0) {

    p1 = nextValidChar(p1, str1);
    p2 = nextValidChar(p2, str2);

    if (p1 < 0 && p2 < 0) return true; // reached the end of both strings
    if (p1 < 0 || p2 < 0) return false; // reached the end of one string
    if (str1[p1] !== str2[p2]) return false; // characters are unequal

    p1 -= 1;
    p2 -= 1;
  }
  return true;
}

/***
Helper function `nextValidChar`
Moves the pointer/index p and applies backspaces
until there are no more backspaces to apply.
Returns the new position of pointer p.
*/
const nextValidChar = (p, str) => {
  let charsToBackspace = 0;
  while (str[p] === '#' || charsToBackspace > 0) {
    if (str[p] === '#') {
      p -= 1;
      charsToBackspace += 1;
    } else {
      p -= 1;
      charsToBackspace -= 1;
    }
  }
  return p;
}

console.log(backspaceCompare('abcdab#c##d', 'abcdd')); // true
console.log(backspaceCompare('xy#z', 'xzz#')); // true
console.log(backspaceCompare('xy#z', 'xyz#')); // false
console.log(backspaceCompare('xp#', 'xyz##')); // true
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p')); // true

/*** RECURSIVE SOLUTION ***/

const backspaceCompare2 = (str1, str2) => {


}





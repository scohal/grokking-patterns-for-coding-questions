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

console.log('LOOP SOLUTION TESTS:')
console.log(backspaceCompare('', 'a#')); // true
console.log(backspaceCompare('abcdab#c##d', 'abcdd')); // true
console.log(backspaceCompare('a#bc#defg##h##ijkl#', 'bdijk')); // true
console.log(backspaceCompare('xy#z', 'xzz#')); // true
console.log(backspaceCompare('xp#', 'xyz##')); // true
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p')); // true
console.log(backspaceCompare('xy#z', 'xyz#')); // false
console.log(backspaceCompare('a#bc#defg##h##ijkl#', 'abdijk')); // false

/*** RECURSIVE SOLUTION ***/

const backspaceCompare2 = (str1, str2) => {
  str1 = applyBackspaces(str1);
  str2 = applyBackspaces(str2);

  if (str1.length === 0 && str2.length === 0) return true; // reached end of both strings
  if (str1.length === 0 || str2.length === 0) return false; // reached end of one string
  if (str1[str1.length - 1] !== str2[str2.length - 1]) return false; // characters not equal

  return backspaceCompare (str1.slice(0, str1.length - 1), str2.slice(0, str2.length - 1));
}

const applyBackspaces = (str, backspaceCount = 0) => {
  if (str.length === 0 ||
     (str[str.length - 1] !== '#' && backspaceCount === 0)) {
    return str;
  }

  if (str[str.length - 1] === '#') {
    return applyBackspaces(str.slice(0, str.length - 1), backspaceCount + 1);
  }

  return applyBackspaces(str.slice(0, str.length - 1), backspaceCount - 1);
}

console.log('RECURSIVE SOLUTION TESTS:')
console.log(backspaceCompare2('', 'a#')); // true
console.log(backspaceCompare2('abcdab#c##d', 'abcdd')); // true
console.log(backspaceCompare2('a#bc#defg##h##ijkl#', 'bdijk')); // true
console.log(backspaceCompare2('xy#z', 'xzz#')); // true
console.log(backspaceCompare2('xp#', 'xyz##')); // true
console.log(backspaceCompare2('xywrrmp', 'xywrrmu#p')); // true
console.log(backspaceCompare2('xy#z', 'xyz#')); // false
console.log(backspaceCompare2('a#bc#defg##h##ijkl#', 'abdijk')); // false
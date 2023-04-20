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

const backspaceCompare = (str1, str2) => {
  let p1 = str1.length - 1;
  let p2 = str2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    p1 = nextValidChar(str1, p1);
    p2 = nextValidChar(str2, p2);

    if (p1 < 0 && p2 < 0) return true; // reached end of both strings
    if (p1 < 0 || p2 < 0) return false; // reached end of one string
    if (str1[p1] !== str2[p2]) return false; // characters don't match

    p1--;
    p2--;
  }

  return true; // reached end of both strings
}


const nextValidChar = (str, i, numCharsToDelete = 0) => {
  if (str[i] !== '#' && numCharsToDelete === 0) return i;
  if (i < 0) return i;

  if (str[i] === '#') {
    numCharsToDelete++; // found another backspace
  } else {
    numCharsToDelete--;
  }

  i--;

  return nextValidChar(str, i, numCharsToDelete);
}



console.log(backspaceCompare("", "a#")); // true
console.log(backspaceCompare("abcdab#c##d", "abcdd")); // true
console.log(backspaceCompare("a#bc#defg##h##ijkl#", "bdijk")); // true
console.log(backspaceCompare("xy#z", "xzz#")); // true
console.log(backspaceCompare("xp#", "xyz##")); // true
console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); // true
console.log(backspaceCompare("xy#z", "xyz#")); // false
console.log(backspaceCompare("a#bc#defg##h##ijkl#", "abdijk")); // false

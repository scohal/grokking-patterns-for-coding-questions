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


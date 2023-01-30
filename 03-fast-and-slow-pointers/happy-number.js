/***
Any number will be called a happy number if, after repeatedly
replacing it with a number equal to the sum of the square of
all of its digits, leads us to number ‘1’.

All other (not-happy) numbers will never reach ‘1’. Instead,
they will be stuck in a cycle of numbers which does not include ‘1’.

Example: 23
Output: true (23 is a happy number)
Explanation:
  - 2^2 + 3^2 = 4 + 9 = 13
  - 1^2 + 3^2 = 1 + 9 = 10
  - 1^2 + 0^2 = 1 + 0 = 1

Input: 12
Output: false (12 is not a happy number)
Explanation:
  - The sum of squares of digits will never equal to 1.
  - Instead, the sum will eventually enter a loop, and repeat values will be calculated.


SOLUTION:
- Use the fast + slow pointer method to determine if there is a cycle.
- We do not need to actually use a linked list here.
1) Write a helper function to calculate the sum of squares of digits.
2) Set 'slow' and 'fast' to equal the input number.
3) Loop continuously...
  - Apply the sum-of-squares operation on 'slow', once
  - Apply the sum-of-squares operation on 'fast', twice
  - If slow equals to fast, that means we are in a bad loop, or arrived at the value of 1
4) If the 'slow' is 1, return true because the number is a happy number. Otherwise, return false.
*/

const isHappyNumber = (num) => {
  let slow = num;
  let fast = num;

  while (true) {
    slow = sumOfSquaresOfDigits(slow);
    fast = sumOfSquaresOfDigits(sumOfSquaresOfDigits(fast));
    if (slow === fast) break;
  }
  return slow === 1;
};

const sumOfSquaresOfDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    sum += lastDigit * lastDigit;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(isHappyNumber(23)); // true
console.log(isHappyNumber(12)); // false
console.log(isHappyNumber(0)); // false
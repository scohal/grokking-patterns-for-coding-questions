const isPalindrome = (str) => {
  str = str.toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // skip over non-alphanumeric characters
    while (left < right && !str[left].match(/[a-z0-9]/g)) left++;
    while (left < right && !str[right].match(/[a-z0-9]/g)) right--;

    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

// Test case 1: "A man, a plan, a canal, Panama!"
// Expected output: true
console.log(isPalindrome("A man, a plan, a canal, Panama!"));

// Test case 2: "race a car"
// Expected output: false
console.log(isPalindrome("race a car"));

// Test case 3: "Was it a car or a cat I saw?"
// Expected output: true
console.log(isPalindrome("Was it a car or a cat I saw?"));

// Test case 4: "Madam, in Eden, I'm Adam."
// Expected output: true
console.log(isPalindrome("Madam, in Eden, I'm Adam."));

// Test case 5: "empty string"
// Expected output: true
console.log(isPalindrome(""));

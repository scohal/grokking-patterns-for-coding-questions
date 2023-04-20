// Using the two-pointer method to reverse vowels

const vowels = 'aeiouAEIOU';

const reverseVowels = (str) => {
  // make an array from the string, easier to work with
  const strArr = str.split('')

  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    console.log({left, right})

    // increase the left pointer until we reach a vowel
    while (left < right && !vowels.includes(strArr[left])) left++;

    // decrease the right pointer until we reach a vowel
    while (left < right && !vowels.includes(strArr[right])) right--;

    // swap them
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
    left++
    right--
  }

  return strArr.join('');
  

}

const s1 = "hello";
const expected_output1 = "holle";
const actual_output1 = reverseVowels(s1);
console.log("Test Case 1: ", expected_output1 === actual_output1);

const s2 = "DesignGUrus";
const expected_output2 = "DusUgnGires";
const actual_output2 = reverseVowels(s2);
console.log("Test Case 2: ", expected_output2 === actual_output2);

const s3 = "AEIOU";
const expected_output3 = "UOIEA";
const actual_output3 = reverseVowels(s3);
console.log("Test Case 3: ", expected_output3 === actual_output3);

const s4 = "aA";
const expected_output4 = "Aa";
const actual_output4 = reverseVowels(s4);
console.log("Test Case 4: ", expected_output4 === actual_output4);

const s5 = "";
const expected_output5 = "";
const actual_output5 = reverseVowels(s5);
console.log("Test Case 5: ", expected_output5 === actual_output5);
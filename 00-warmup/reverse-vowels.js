class Solution {
  reverseVowels(str) {
    
    const vowels = 'aeiou';
    const storeVowels = [];

    // iterate through the string and store all the vowels
    for(let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        storeVowels.push(str[i]);
      } 
    }

    // iterate backwards through the string and replace vowels
    for (let i = str.length - 1; i >= 0; i--) {
      if (vowels.includes(str[i].toLowerCase())) {
        str = str.slice(0, i) + storeVowels.shift() + str.slice(i + 1)
      }
    }

    return str;
  }
}

// test cases
const solution = new Solution();

const s1 = "hello";
const expected_output1 = "holle";
const actual_output1 = solution.reverseVowels(s1);
console.log(actual_output1)
console.log("Test Case 1: ", expected_output1 === actual_output1);

const s2 = "DesignGUrus";
const expected_output2 = "DusUgnGires";
const actual_output2 = solution.reverseVowels(s2);
console.log("Test Case 2: ", expected_output2 === actual_output2);

const s3 = "AEIOU";
const expected_output3 = "UOIEA";
const actual_output3 = solution.reverseVowels(s3);
console.log("Test Case 3: ", expected_output3 === actual_output3);

const s4 = "aA";
const expected_output4 = "Aa";
const actual_output4 = solution.reverseVowels(s4);
console.log("Test Case 4: ", expected_output4 === actual_output4);

const s5 = "";
const expected_output5 = "";
const actual_output5 = solution.reverseVowels(s5);
console.log("Test Case 5: ", expected_output5 === actual_output5);

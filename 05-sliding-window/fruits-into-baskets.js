/**
 * You are visiting a farm to collect fruits. The farm has a single row
 * of fruit trees. You will be given two baskets, and your goal is to
 * pick as many fruits as possible to be placed in the given baskets.
 * 
 * You will be given an array of characters where each character represents
 * a fruit tree. The farm has following restrictions:
 * 
 * 1) Each basket can have only one type of fruit. There is no limit to how
 *    many fruit a basket can hold.
 * 2) You can start with any tree, but you can’t skip a tree once you have
 *    started.
 * 3) You will pick exactly one fruit from every tree until you cannot,
 *    i.e., you will stop when you have to pick from a third fruit type.
 * 
 * Write a function to return the maximum number of fruits in both baskets.
 * 
 * Input: Fruit=['A', 'B', 'C', 'A', 'C']
 * Output: 3
 * Explanation: We can put 2 'C' in one basket and one 'A' in the other from
 * the subarray ['C', 'A', 'C']
 * 
 * Input: Fruit = ['A', 'B', 'C', 'B', 'B', 'C']
 * Output: 5
 * Explanation: We can put 3 'B' in one basket and two 'C' in the other
 * basket. This can be done if we start with the second letter:
 * ['B', 'C', 'B', 'B', 'C']
 * 
 * This problem is basically just.. 
 * "Longest subarray with 2 distinct elements."
 */

// const fruitsIntoBaskets = (arr) => {
//     let maxFruits = 0;
//     let fruits = 0;
//     let fruitCache = {};
//     let left = 0;

//     for (let right = 0; right < arr.length; right++) {
//         fruits += 1;
//         fruitCache[arr[right]] = (fruitCache[arr[right]] || 0) + 1;

//         let numDistinctFruits = Object.keys(fruitCache).length;

//         if (numDistinctFruits <= 2) {
//             maxFruits = Math.max(maxFruits, fruits);
//         }

//         // too many distinct fruits, shrink window from left
//         while (numDistinctFruits > 2) {
//             // take fruit out of cache
//             fruitCache[arr[left]] -= 1;
//             if (fruitCache[arr[left]] === 0) {
//                 delete fruitCache[arr[left]];
//                 numDistinctFruits -= 1;
//             }
//             fruits -= 1; // take fruit out of basket
//             left += 1; // slide window
//         }
//     }
//     return maxFruits;
// };


const fruitsIntoBaskets = (arr) => {
    const MAX_FRUITS = 2;
    const fruitMap = {};
    let numFruits = 0;

    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // pick a fruit
        const fruit = arr[windowEnd];
        fruitMap[fruit] = (fruitMap[fruit] || 0) + 1;

        // shrink the window until we have 2 or less types of fruits
        while(Object.keys(fruitMap).length > MAX_FRUITS) {
            const fruit = arr[windowStart];
            // remove it from the basket
            fruitMap[fruit] -= 1;
            if (fruitMap[fruit] === 0) delete fruitMap[fruit];
            windowStart++;
        }

        // now, we are holding 2 or less types of fruits
        numFruits = Math.max(numFruits, windowEnd - windowStart + 1);

    }

    return numFruits;
}



console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])) // 3 (from ['C', 'A', 'C'])
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C'])) // 5 (from ['B', 'C', 'B', 'B', 'C'])
console.log(fruitsIntoBaskets(['A', 'A', 'A', 'A', 'A'])) // 5
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'D', 'E'])) // 2
console.log(fruitsIntoBaskets(['A'])) // 1
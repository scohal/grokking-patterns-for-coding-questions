/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */

const throws = ['rock', 'paper', 'scissors'];

function rockPaperScissors(num, throwNum = 0, sequence = [], result = []) {
  if (throwNum === num) {
    result.push([...sequence]);
    return;
  }

  for (let i = 0; i < throws.length; i++) {
    sequence[throwNum] = throws[i];
    rockPaperScissors(num, throwNum + 1, sequence, result);
  }

  return result;
}

console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));

// Another way to do the problem

function rockPaperScissors2(num, sequence = [], result = []) {
  if (sequence.length === num) {
    result.push(sequence);
    return;
  }

  // note: `concat` returns a new instance of Array
  rockPaperScissors2(num, sequence.concat('rock'), result);
  rockPaperScissors2(num, sequence.concat('scissors'), result);
  rockPaperScissors2(num, sequence.concat('paper'), result);

  return result;
}

console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));

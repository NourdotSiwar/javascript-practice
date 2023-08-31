/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let count = 0;
    let majority = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (count === 0) {
            majority = numbers[i];
            count++;
        } else if (numbers[i] === majority) {
            count++;
        } else {
            count--;
        }
    }
    return majority;
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};
/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    const length = str.length;
    const halfLength = Math.floor(length / 2);

    let firstHalf = str.slice(0, halfLength).toUpperCase();
    let secondHalf = str.slice(halfLength).toLowerCase();

    if (length % 2 === 1) {
        secondHalf = secondHalf.charAt(0).toLowerCase() + secondHalf.slice(1);
    }

    return firstHalf + secondHalf;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};
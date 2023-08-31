/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    function isLetter(char) {
        return char.toLowerCase() != char.toUpperCase();
    }

    let left = 0; 
    let right = str.length - 1;

    for(let i = 0; i < str.length; i++){
        if(!isLetter(str[left])){
            left++;
            continue;
        }
        if(!isLetter(str[right])){
            right--;
            continue;
        }
        if(str[left].toLowerCase() != str[right].toLowerCase()){
            return false;
        }
        left++;
        right--;

    }

    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};
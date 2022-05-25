// Given a string containing just the characters '(' and ')',
//  find the length of the longest valid (well-formed) parentheses substring.

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (s.length <= 1) {
        return 0;
    }

    let validParens = [-1];
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") {
            validParens.push(i)
        } else {
            validParens.pop()
            if (validParens.length >= 1) {
                longest = Math.max(longest, i - validParens.at(-1))
            } else {
                validParens.push(i)
            }
        }
    }

    return longest;
};

console.log(longestValidParentheses("(()")); //2
console.log(longestValidParentheses(")()())")); //4
console.log(longestValidParentheses("()(()")); //2
console.log(longestValidParentheses("")); // 0
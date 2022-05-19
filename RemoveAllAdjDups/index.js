/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {

    const stack = []
    const counter = [];

    for (const elem of s) {
        if (stack[stack.length - 1] === elem) {
            counter[counter.length - 1]++;
        } else {
            counter.push(1);
        }
        stack.push(elem);

        if (counter[counter.length - 1] === k) {
            stack.splice(stack.length - k, k);
            counter.pop();
        }

    }

    return stack.join('')
};

// console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));
// console.log(removeDuplicates("pbbcggttciiippooaais", 2));


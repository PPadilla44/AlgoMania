/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {

    if(k >= num.length) return 0;

    
    const freq = {};
    
    for(const char of num) {
        freq.hasOwnProperty(char) ? freq[char]++ : freq[char] = 1;
    }

    const keys = Object.keys(freq);
    let newNum = "";
    for(let i = keys.length - 1; i >=0; i-- ) {
        console.log(keys[i]);
    }

};

console.log(removeKdigits(
    "1432219",
    3
));
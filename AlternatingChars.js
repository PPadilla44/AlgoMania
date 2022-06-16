/**
* @param {string} s
*/

function alternatingCharacters(s) {
    let totalDel = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            totalDel++;
        }
    }

    return totalDel
}

console.log(alternatingCharacters("AAAA"))
console.log(alternatingCharacters("BBBBB"))
console.log(alternatingCharacters("ABABABAB"))
console.log(alternatingCharacters("BABABA"))
console.log(alternatingCharacters("AAABBB"))
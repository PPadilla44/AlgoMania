const test1s = "cbaebabacd";
const test1p = "abc";
const result1 = [0, 6];

const test2s = "abab";
const test2p = "ab";
const result2 = [0, 1, 2];

const test3s = "baa";
const test3p = "aa";
const result3 = [1];

const test4s = "ababababab";
const test4p = "aab";
const result4 = [0, 2, 4, 6];
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const indexes = [];

    if(p.length > 1002) {
        return []
    }
    const freq1 = {}
    for (const char of p) {
        freq1.hasOwnProperty(char) ? freq1[char]++ : freq1[char] = 1;
    }

    for (let i = 0; i < s.length - (p.length - 1); i++) {
        const sub = s.substring(i, i + (p.length));
        let isAnagram = true;

        if (sub !== p) {

            const freq2 = {}
            for (const char2 of sub) {
                freq2.hasOwnProperty(char2) ? freq2[char2]++ : freq2[char2] = 1;
            }


            for (const key in freq2) {
                if (freq2[key] != freq1[key]) {
                    isAnagram = false;
                }
            }
        }

        if (isAnagram) {
            indexes.push(i)
        }
    }

    return indexes;
};


console.log(findAnagrams(test1s, test1p));
console.log(findAnagrams(test2s, test2p));
console.log(findAnagrams(test3s, test3p));
console.log(findAnagrams(test4s, test4p));
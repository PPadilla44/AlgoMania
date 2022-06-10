/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//     if (s.length < 1) {
//         return 0
//     }
//     let longestStr = s[0];
//     for (let i = 0; i < s.length; i++) {
//         let current = s[i];
//         for (let j = i + 1; j < s.length; j++) {
//             if (!current.includes(s[j])) {
//                 current += s[j];
//                 if (current.length > longestStr.length) {
//                     longestStr = current;
//                 }
//             } else {
//                 break;
//             }
//         }
//     }

//     return longestStr.length;
// };

var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let longest = 0;
    let hash = {};

    for (let i = 0; i < s.length; i++) {
        if (hash.hasOwnProperty(s.charAt(i))) {
            if (hash[s.charAt(i)] >= start) {
                start = hash[s.charAt(i)] + 1;
            }
        }
        longest = Math.max(i - start + 1, longest);
        hash[s.charAt(i)] = i;
    }
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("au"));
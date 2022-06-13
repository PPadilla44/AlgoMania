/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
const isBadVersion = function (version) {
    return version >= 4;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// var solution = function (isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function (n) {
//         while (isBadVersion(n)) {
//             n--;
//         }
//         return n + 1;
//     };
// };
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let max = n, min = 0;
        let getMid = num => ((num - min) / 2 + min) | 0;
        let mid = getMid(max);
        while (min <= max) {
            if (isBadVersion(mid)) {
                max = mid - 1;
                mid = getMid(max);
            } else {
                min = mid + 1;
                mid = getMid(max)
            }
        }
        return mid + 1;
    };
};

let res = solution(isBadVersion);
console.log(res(5));
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// var minimumTotal = function (triangle) {
//     let minSum = 0;
//     for (const row of triangle) {
//         let lowest = row[0];
//         for (const num of row) {
//             if (num < lowest) {
//                 lowest = num;
//             }
//         }
//         minSum += lowest;
//     }
//     return minSum;
// };
var minimumTotal = function (triangle) {
    let minSum = 0;
    for (const row of triangle) {
        let lowest = row[0];
        for (const num of row) {
            if (num < lowest) {
                lowest = num;
            }
        }
        minSum += lowest;
    }
    return minSum;
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
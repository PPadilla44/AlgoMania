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
// var minimumTotal = function (triangle, idx = -1) {

//     if (triangle.length < 1) {
//         return 0;
//     }

//     const row = triangle[triangle.length - 1];
//     let lowest = row[0];

//     if (idx < 0) {
//         idx = 0
//         for (let i = 0; i < row.length; i++) {
//             const num = row[i];
//             if (num < lowest) {
//                 lowest = num;
//                 idx = i;
//             }
//         };
//     } else {
//         lowest = row[idx];
//         if (lowest) {
//             let left = row[idx - 1];
//             if (left && left < lowest) {
//                 lowest = left;
//                 idx--;
//             }
//         } else {
//             lowest = row[idx - 1];
//             idx--
//         }
//     }

//     console.log(lowest);

//     let sum = minimumTotal(triangle.slice(0, triangle.length - 1), idx);

//     return sum + lowest;
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

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal([[-10]]));
// console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
console.log(minimumTotal([[2], [3, 4], [6, 5, 9], [4, 4, 8, 0]]));
//  2 + 3 + 5 + 4
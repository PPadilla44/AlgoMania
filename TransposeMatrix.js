/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    const newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let num = matrix[i][j];
            if (newArr[j]) {
                newArr[j].push(num);
            } else {
                newArr.push([num]);
            }
        }
    }
    return newArr;
};

const test1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const test2 = [[1, 2, 3], [4, 5, 6]]
console.log(transpose(test1));
// console.log(transpose(test2));
//  [[1,4,7],[2,5,8],[3,6,9]]
//  [[1,4],[2,5],[3,6]]]
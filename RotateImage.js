/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const n = matrix.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.ceil(n / 2); j++) {
            const start = matrix[i][j]
            matrix[i][j] = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
            matrix[j][n - 1 - i] = start;
        }
    }
    return matrix
};

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const res1 = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

const matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]
const res2 = [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11]
]

console.log(rotate(matrix1));
// console.log(rotate(matrix2));
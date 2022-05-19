/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    const cols = heights.length - 1;
    const rows = heights[0].length - 1;
    // let lowest = 

    for(let i = 0; i <= cols; i++) {
        for(let j = 0; j <= rows; j++) {
            console.log(heights[i][j]);
        }
    }

};



// Consider the grid as a graph, where adjacent cells have an edge with cost of the difference between the cells.

// If you are given threshold k, check if it is possible to go from (0, 0) to (n-1, m-1) using only edges of ≤ k cost.

// Binary search the k value.

const test1 = [
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5]
] //2

const test2 = [
    [1, 2, 3],
    [3, 8, 4],
    [5, 3, 5]
] // 1

const test3 = [
    [1, 2, 1, 1, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 1, 1, 2, 1]
] // 0

console.log(minimumEffortPath(test1));

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let stack = []
    let total = 0;

    for(let i = 0; i < points.length - 1; i++) {
        let pointOne = points[i];
        let pointTwo = points[i + 1];
        let initDiff = Math.abs((pointOne[0] - pointTwo[0])) + Math.abs((pointOne[1] - pointTwo[1]));

        
        if(i > 1) {
            let otherDiff =  Math.abs((pointThree[0] - pointTwo[0]) + (pointThree[1] - pointTwo[1]))
            if(initDiff > otherDiff) {
                initDiff = otherDiff
            }
        }

        total += initDiff;

    }
    return total;
};

const test1 = [[0,0],[2,2],[3,10],[5,2],[7,0]];
const expected1 = 20;

const test2 = [[3,12],[-2,5],[-4,1]];
const expected2 = 18;


const test3 = [[0,0],[1,1],[1,0],[-1,1]]; 
const expected3 = 4;



// console.log(minCostConnectPoints(test1));
// console.log(minCostConnectPoints(test2));
console.log(minCostConnectPoints(test3));
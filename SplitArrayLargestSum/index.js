/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    for (let i = 1; i < nums.length; i++) {
        const firstArr = nums.slice(0, i);
        const firstSum = firstArr.reduce((partialSum, a) => partialSum + a, 0)
        console.log(firstArr)
        console.log(firstSum)
        const secondArr = nums.slice(i);
        const secondSum = secondArr.reduce((partialSum, a) => partialSum + a, 0)
        console.log(secondArr)
        console.log(secondSum)
        console.log("****");

        if(secondSum < smallest) {
            smallest = secondSum
        }
        if(firstSum < smallest) {
            smallest = firstSum
        }
    }
    console.log("LOGASGa",smallest);
    return smallest
};

splitArray([7,2,5,10,8], 2)
module.exports = splitArray;
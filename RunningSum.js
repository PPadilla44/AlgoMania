/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const arr = [];
    let sum = 0;
    for (const num of nums) {
        sum += num;
        arr.push(sum)
    }
    return arr;
};

const runningSumArrow = (nums) => {
    const arr = [nums[0]];
    nums.reduce((acc, num) => {
        acc += num
        arr.push(acc)
        return acc
    })
    return arr;
}

// console.log(runningSum([1, 2, 3, 4]));
console.log(runningSumArrow([1, 2, 3, 4]));
const test1 = [7,1,5,3,6,4];
const result1 = 5;

const test2 = [7,6,4,3,1];
const result2 = 0;

const test3 = [1, 2];
const result3 = 1;

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    
    let minPos = 0;

    for (let i = 0; i < prices.length; i++) {
        if(prices[minPos] > prices[i]) {
            minPos = i;
        }
    }

    let maxPos = minPos

    for (let i = minPos; i < prices.length; i++) {
        if (prices[maxPos] < prices[i]) {
            maxPos = i;
        }
    }


    return maxPos === minPos ? 0 : prices[maxPos] - prices[minPos];
};

console.log(maxProfit(test1));
console.log(maxProfit(test2));
console.log(maxProfit(test3));
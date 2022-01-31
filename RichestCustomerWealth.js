const test1 = [[1,2,3],[3,2,1]];
const result1 = 6;

const test2 = [[1,5],[7,3],[3,5]];
const result2 = 10;

const test3 = [[2,8,7],[7,1,3],[1,9,5]];
const result3 = 17;

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    
    let largest = 0;

    for(const item of accounts) {
        let total = 0;
        for(const num of item) {
            total += num;
        }
        if(total > largest) {
            largest = total;
        }
    }
    return largest;
};

console.log(maximumWealth(test1));
console.log(maximumWealth(test2));
console.log(maximumWealth(test3));
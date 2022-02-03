/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let newArray = [];
    for(const num of nums) {
        let stringNum = `${num}`;
        for(const letter of stringNum) {
            newArray.push(+letter)
        }
    }

    newArray.sort((a,b) => a-b)
    return (newArray.reverse().join(""));
};

console.log(largestNumber([10,2]));
console.log(largestNumber([3,30,34,5,9]));
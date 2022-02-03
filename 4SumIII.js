const testA1 = [1, 2]
const testA2 = [-2, -1]
const testA3 = [-1, 2]
const testA4 = [0, 2]
const result1 = 2;

const testB1 = [0]
const testB2 = [0]
const testB3 = [0]
const testB4 = [0]
const result2 = 1;


const testC1 = [1]
const testC2 = [-1]
const testC3 = [0]
const testC4 = [1]
const result3 = 0;


const testD1 = [-1, -1]
const testD2 = [-1, 1]
const testD3 = [-1, 1]
const testD4 = [1, -1]
const result4 = 6;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {

    let count = 0;

    const A = {};
    
    for(const num of nums1) {
        for(const num2 of nums2) {
            let added = num + num2;
            A.hasOwnProperty(added) ? A[added]++ : A[added] = 1;
        }
    }

    for(const num of nums3) {
        for(const num2 of nums4) {
            let added = num + num2;
            if(A.hasOwnProperty(-added)) {
                count += A[-added]
            }
        }
    }


    return count;
};


console.log("COUNT", fourSumCount(testA1, testA2, testA3, testA4));
console.log("COUNT", fourSumCount(testB1, testB2, testB3, testB4));
console.log("COUNT", fourSumCount(testC1, testC2, testC3, testC4));
console.log("COUNT", fourSumCount(testD1, testD2, testD3, testD4));
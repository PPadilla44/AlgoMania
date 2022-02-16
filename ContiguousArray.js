const test1 = [0, 1];
const result1 = 2;

const test2 = [0, 1, 0];
const result2 = 2;

const test3 = [0, 1, 1, 0, 1, 0];
const result3 = 4;

const test4 = [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0
    , 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0,
    0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 1, 1]
    ;
const result4 = 68;

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {

    console.log(nums.length);

    let longest = 0;

    let currLength = 1;



    for (let i = 0; i < nums.length - 1; i++) {

        let curr = nums[i];


        if (curr !== nums[i + 1]) {
            currLength++;
        }


        if (currLength > longest && currLength % 2 === 0) {
            longest = currLength;
        }

        if (curr === nums[i + 1]) {
            currLength = 1;
        }



    }

    return longest
};
// var findMaxLength = function (nums) {

//     let longest = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const temp = nums.slice(i, j + 1);
//             if(temp.length > 1) {
//                 let zero = 0;
//                 let one = 0;
//                 for(const num of temp) {
//                     num === 0 ? zero++ : one++;
//                 }
//                 if(zero === one && longest < temp.length) {
//                     longest = temp.length;
//                 }
//             }
//         }
//     }

//     return longest
// };

// console.log("Answerr", findMaxLength(test1));
// console.log("Answerr", findMaxLength(test2));
// console.log("Answerr", findMaxLength(test3));
console.log("Answerr", findMaxLength(test4));
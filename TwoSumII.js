/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//     console.log(numbers);
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if(numbers[i] + numbers[j] === target) {
//                 return [i + 1, j + 1]
//             }
//         }
//     }
// };
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) {
            return [i + 1, j + 1]
        }
        if (sum > target) {
            j--;
        } else {
            i++;
        }

    };
    return [i + 1, j + 1]
};

console.log(twoSum([2, 7, 11, 15], 9));
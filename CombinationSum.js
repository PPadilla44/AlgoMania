/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const bigArr = []

    let i = 0;
    let j = 0;

    while(i < candidates.length) {
        let potArray = [];
        let sum = 0;
        while(sum <= target) {

            

            sum += candidates[j];
            potArray.push(candidates[j])
            console.log(potArray);
            if(sum === target) {
                console.log(sum);
            }
            j++;
        }
        i++;
        j = 0;
    }


};

console.log(combinationSum([2, 3, 6, 7], 7));
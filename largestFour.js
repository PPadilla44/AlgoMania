const keyString = "asdpa3252sadh0";

const one = [4, 0, -1, 2];
const resultOne = "5:0hdas2523apdsa";


const two = [-1, 9, 0, -6, 1, 0];
const resultTwo = "01:0hdas2523apdsa";

const three = [-5, -9, 0, -6, 1, 0];
const thsaio = [1, 0, 1, -5]
const resultThree = "4-:0hdas2523apdsa";

// function largestFour(arr) {

//     let total = 0;
//     let result = "";

//     if (arr.length <= 4) {
//         for (const num of arr) {
//             total += num;
//         }
//         let temp = `${keyString}:${total}`;
//         for (let i = temp.length - 1; i >= 0; i--) {
//             result += temp[i];
//         }
//         return result;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 // [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }

//     for (let i = arr.length - 1; i >= arr.length - 4; i--) {
//         total += arr[i]
//     }

//     let temp = `${keyString}:${total}`;
//     for (let i = temp.length - 1; i >= 0; i--) {
//         result += temp[i];
//     }
//     return result;
// }

// console.log(largestFour(one));
// console.log(largestFour(two));
// console.log(largestFour(three));



function largestFour(arr) {
    const topFour = [arr[0], arr[1]];
    let minI = 0;
    let maxI = 1;

    for (const [i,num] of arr.entries()) {
        if(num >= arr[maxI]) {
            console.log(num);
            topFour.push(num)
            maxI = i;            
        } else if (num >= arr[minI]) {
            minI = i
            if(topFour.length > 3) {
                topFour.push(num)
                
            }
        }
    }
    console.log(maxI, minI);
    console.log(topFour);
}

console.log(largestFour(three));
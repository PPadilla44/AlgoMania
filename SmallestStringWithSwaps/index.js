/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
// var smallestStringWithSwaps = function (s, pairs) {

//     let splitArr = s.split("");
//     let i = 0;
//     while(i < pairs.length) {
//         let p = pairs[i]
//         console.log(p);
//         let [one, two] = p;
//         if(splitArr[one] > splitArr[two]) {
//             let temp = splitArr[one];
//             splitArr[one] = splitArr[two];
//             splitArr[two] = temp;
//             i = 0;
//             console.log(splitArr);
//         } else {
//             i++
//         }

//     }

//     return splitArr.join('')
// };
var smallestStringWithSwaps = function (s, pairs) {

    let sortedPairs = pairs.sort((a, z) => (a[0] + a[1]) - (z[0] + z[1]));
    console.log(sortedPairs);

    

};

// console.log( smallestStringWithSwaps( "dcab", [[0,3],[1,2]] ) );
// "bacd"

console.log( smallestStringWithSwaps( "dcab", [[0,3],[1,2],[0,2]] ) );
// "bacd"

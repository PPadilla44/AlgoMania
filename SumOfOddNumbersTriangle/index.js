function rowSumOddNumbers(n) {
	let totalElems = 0;
    for (let i = n - 1; i >= 0; i--) {
        totalElems += i
    }
    let start = totalElems * 2 + 1;
    let answer = start;

    for(let j = 0; j < n - 1; j++){
        start += 2
        answer += start
    }
    return answer
}

// console.log(rowSumOddNumbers(1)) // 1
// console.log(rowSumOddNumbers(2)) // 8
console.log(rowSumOddNumbers(3)) // 8
// console.log(rowSumOddNumbers(4)) // 74088
console.log(rowSumOddNumbers(42)) // 74088
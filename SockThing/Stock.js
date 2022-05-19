function solution(prices) {
    let highest = 0;
    let minI = 0;
    let maxI = 0;

    for (let i = 1; i < prices.length; i++) {

        let max = prices[maxI];
        let min = prices[minI];

        let num = prices[i];


        if (num < min) {
            min = num;
            minI = i;
        }

        if (num > max || minI > maxI) {
            max = num;
            maxI = i;
        }

        if (maxI > minI) {
            let total = max - min;
            if (total > highest) {
                highest = total;
            }
        }

    }
    return highest;
}
console.log(solution([3, 100, 1, 97]));
console.log(solution([7, 1, 5, 3, 6, 4]));

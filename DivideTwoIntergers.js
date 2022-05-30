/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const MAX = 2147483648
    let posDividend = Math.abs(dividend)
    let posDiv = Math.abs(divisor);
    if (posDividend < posDiv) {
        return 0
    }
    let isNeg = dividend < 0 || divisor < 0 ;
    isNeg =  dividend < 0 && divisor < 0 ? false : isNeg
    if(posDiv === 1 && posDividend !== 1) {
        if (posDividend >= MAX) {
            posDividend = MAX;
        } else {
            posDividend++;
        }
        return isNeg ? -(posDividend) : (posDividend - 1)
    }
    let sol = 0;
    let acc = 0;
    while (acc <= posDividend && acc <= MAX) {
        acc += posDiv;
        sol++;
    }
    sol--;
    return isNeg ? -sol : sol
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(0, 1));
console.log(divide(1, 1));
console.log(divide(-1, 1));
console.log(divide(-1, -1));
console.log(divide(-2147483648, -1));
console.log(divide(2147483647, 1));
console.log(divide(-2147483648, 1));
console.log(divide(-2147483648, 2));

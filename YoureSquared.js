var isSquare = function (n) {
    if(n < 0){return false }
    return !Math.sqrt(n).toString().includes(".")
}

// const isSquare = (n) => Number.isInteger(Math.sqrt(n))

console.log(isSquare(-1), false);
console.log(isSquare(0), true);
console.log(isSquare(3), false);
console.log(isSquare(4), true);
console.log(isSquare(25), true);
console.log(isSquare(26), false);
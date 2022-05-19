function squareDigits(num) {
    let numString = num.toString();
    let returnNumString = "";

    for(const n of numString){
        let number = parseInt(n);
        let sqaured = Math.pow(number, 2).toString();
        returnNumString += sqaured

    }
    return parseInt(returnNumString)
}

console.log(squareDigits(3212));  //9414
console.log(squareDigits(2112));  //4114
console.log(squareDigits(0));  //0
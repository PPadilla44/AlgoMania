// Persistent Bugger.

function persistence(num) {

    let newNum = num;
    let i = 0;
    while(newNum >= 10) {
        let stringNum = newNum.toString();
        let mult = 1;
        for(const char of stringNum) {
            mult *= parseInt(char);
        }
        newNum = mult;
        i++;
    }
    return i
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
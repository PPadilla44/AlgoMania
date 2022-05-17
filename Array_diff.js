// Array.diff CODEWARS

function arrayDiff(a = [], b = []) {
    if (a.length < 1) { return [] };

    const differences = [];
    const bHash = {};
    for (const num of b) {
        bHash[num] = true;
    }
    for (const num of a) {
        if (!bHash.hasOwnProperty(parseInt(num))) {
            differences.push(num);
        }
    }
    return differences
}

// const arrayDiff = (a = [], b = []) => a.filter(e => !b.includes(e));

console.log(arrayDiff([1, 2], [1])) //, [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [1])) //, [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [2])) //, [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1, 2, 2], [])) //, [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1, 2])) //, [], "a was [], b was [1,2]");
console.log(arrayDiff([1, 2, 3], [1, 2])) //, [3], "a was [1,2,3], b was [1,2]")
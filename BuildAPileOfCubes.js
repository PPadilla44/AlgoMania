// Build a pile of Cubes

function findNb(m) {
    let blocks = 1;
    let volume = Math.pow(blocks, 3)
    while(volume < m) {
        blocks++;
        volume += Math.pow(blocks, 3)
    }
    
    return volume === m ? blocks : -1
}

console.log(findNb(4183059834009)); //2022
console.log(findNb(24723578342962)); //-1
console.log(findNb(135440716410000)) //4824
console.log(findNb(40539911473216)) //3568
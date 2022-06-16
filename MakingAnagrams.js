function makeAnagram(a, b) {

    const freqTableA = {};

    for (const char of a) {
        if (char in freqTableA) {
            freqTableA[char]++;
        } else {
            freqTableA[char] = 1;
        }
    }
    const freqTableB = {};

    for (const char of b) {
        if (char in freqTableB) {
            freqTableB[char]++;
        } else {
            freqTableB[char] = 1;
        }
    }

    let totalDel = 0;
    for (const keyA in freqTableA) {
        if (!(keyA in freqTableB)) {
            totalDel += freqTableA[keyA];
            delete freqTableA[keyA];
        } else {
            if (freqTableA[keyA] > freqTableB[keyA]) {
                let diff = Math.abs(freqTableA[keyA] - freqTableB[keyA]);
                freqTableA[keyA] -= diff;
                totalDel += diff
                if (!freqTableA[keyA]) {
                    delete freqTableA[keyA]
                }
            }
        }

    }

    for (const keyB in freqTableB) {
        if (!(keyB in freqTableA)) {
            totalDel += freqTableB[keyB];
            delete freqTableB[keyB];
        } else {
            let diff = Math.abs(freqTableB[keyB] - freqTableA[keyB]);
            freqTableB[keyB] -= diff;
            totalDel += diff
            if (!freqTableB[keyB]) {
                delete freqTableA[keyB]
            }
        }
    }

    return totalDel
}

console.log(makeAnagram("ccc", "cccccccc"));
console.log(makeAnagram("fcrxzwscanmligyxyvym","jxwtrhvujlmrpdoqbisbwhmgpmeoke"));
console.log(makeAnagram("showman","woman"));
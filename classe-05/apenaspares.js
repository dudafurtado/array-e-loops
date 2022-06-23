const original = [1, 4, 12, 21, 53, 88, 112];

let arrayPar = []

for (let d = 0; d < original.length; d++) {
    let numeroPar = original[d] % 2
    if (numeroPar === 0) {
        arrayPar.push(original[d])
    }
}

console.log(arrayPar)
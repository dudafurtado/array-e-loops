const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];



for (let d = 0; d < original.length; d++) {
    let multiplode2 = original[d] % 2
    if (multiplode2 == 0) {
        pares.push(original[d])
    } else {
        impares.push(original[d])
    }
}

console.log(pares)
console.log(impares)
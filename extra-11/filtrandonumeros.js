const original = [5, 7, 13, 17, 26, 34, 118, 245];

let novaArray = []

for (let d = 0; d < original.length; d++) {
    if (original[d] >= 10 && original[d] <= 20 || original[d] > 100)
    novaArray.push(original[d])
}

console.log(novaArray)
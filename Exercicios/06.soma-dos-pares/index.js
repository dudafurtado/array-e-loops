const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let paresSoma = 0

for (let d = 0; d < numeros.length; d++) {
    let calcularpares = numeros[d] % 2
    if (calcularpares == 0) {
        paresSoma += numeros[d]
    }
}

console.log(paresSoma)
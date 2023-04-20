const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = 0

for (let d = 0; d < numeros.length; d++) {
    if (numeros[d] > maiorNumero) {
    maiorNumero = numeros[d]
 }
}

console.log(maiorNumero)

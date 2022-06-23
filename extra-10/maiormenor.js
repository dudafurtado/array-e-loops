const numeros = [8, 11, 4, 1]

let maior = 0 
let menor = numeros[0]

for (let d = 0; d < numeros.length; d++) {
    if (numeros[d] > maior) {
    maior = numeros[d]
    } 
    if (numeros[d] < menor) {
        menor = numeros[d]
    }
}

console.log(maior - menor)

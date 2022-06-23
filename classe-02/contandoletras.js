const letras = ["A", "a", "B", "C", "E", "e"];


let letrasEncontradas = 0
let naoEncontreiLetras = true 

for (let d = 0; d < letras.length; d++) {
    if (letras[d] == "E" || letras[d] == "e") {
        letrasEncontradas += 1
        naoEncontreiLetras = false
    } 
}

if  (naoEncontreiLetras == true) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
} 

let letraOuLetras = (letrasEncontradas === 1 ? "letra" : "letras")

if (letrasEncontradas > 0) {
    console.log(`Foram encontradas ${letrasEncontradas} ${letraOuLetras} "E" ou "e".`)
}
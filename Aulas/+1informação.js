let cores = ["azul", "verde", "vermelho", "amarelo"]

console.log(cores[0])
// imprime o valor de index 0, primeira informação do array.

console.log(cores.length)
// imprime em tela o valor do comprimento do array

console.log(cores)

cores[cores.length] = "laranja"
// adiciona ao index de valor 4 (o comprimento do array no momento) a string informada.
// o indice é contado a partir do 0
// o length é contato a partir do 1

console.log(cores)

cores[cores.length] = "roxo"
console.log(cores)
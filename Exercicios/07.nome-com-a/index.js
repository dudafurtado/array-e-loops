const nomes = ["Ana", "Joana", "Carlos", "amanda"]

let letraAoua = []

for (let d = 0; d < nomes.length; d++) {
    if (nomes[d][0] == "A" || nomes[d][0] == "a") {
        letraAoua.push(nomes[d])
    }
}

console.log(letraAoua)
let nomes = ["Maria", "Rafael", "Eduarda", "Carlos", "Jenny", "João", "Caio"]

let acheiJoao = false

for (let d of nomes) {
    let i = nomes.indexOf(d);
    
    if (d === "João") {
         acheiJoao = true
         console.log(`O nome João foi encontrado na ${i} posição`)
         break
 }
}

if (acheiJoao == false) {
    console.log("NÃO ENCONTRADO")
}


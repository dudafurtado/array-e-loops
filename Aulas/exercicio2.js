let palavra = "Arara" 

let temLetraa = 0

for (let d of palavra) {
    if (d === "a") {
        temLetraa++;
    }
}

if (temLetraa > 0) {
    console.log(`Nessa palavra existem ${temLetraa} letras a`)
} else {
    console.log("Nessa palavra não tem nenhuma letra a")
}
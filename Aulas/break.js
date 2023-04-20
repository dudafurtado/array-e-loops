let linguaOficial = "inglês"
console.log(linguaOficial)

let temOuNaoL = false

for (let d of linguaOficial) {
    if (d === "l") {
        temOuNaoL = true
        console.log("Tem a letra l")
        break;
    }
}

if (temOuNaoL === false) {
    console.log("Nada de l nessa palavra")
}
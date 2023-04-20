const numeros = [54, 22, 14, 87, 10, 284];

let sem10 = true

for (let d of numeros) {
    if (d === 10) {
        let item = numeros.indexOf(d)
        console.log(item)
        sem10 = false
    } 
}

if (sem10 == true) {
    console.log(-1)
}
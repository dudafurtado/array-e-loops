let sapatos = ["vans", "yeezy", "balenciaga", "jordan", "off white"]

let yeezyEncontrado = false

for (let d = 0; d < sapatos.length; d++) {
    let item = sapatos[d]

    if (item === "yeezy") {
        console.log(`O sapato que eu quero está na posição ${d}`)
        yeezyEncontrado = true 
        break
    }
}

if (yeezyEncontrado == false) {
    console.log("O sapato que eu quero não está na lista")
}
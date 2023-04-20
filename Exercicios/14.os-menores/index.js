const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let d = 0
while (d < arrayA.length) {
    if (arrayA[d] > arrayB[d]) {
        console.log(arrayB[d])
    } else {
        console.log(arrayA[d])
    }
    d++
}
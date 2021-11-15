
let numero = 104712

console.log(esPrimo(numero));

function esPrimo(num) {
    let cont = 0
    for (let i = 1; i <= num; i++) {
        if (num%i == 0) {
            cont = cont + 1
            //cont++
        }
    }

    if (cont == 2) {
        return true
    }

    return false
}


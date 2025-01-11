function calculadora() {
    let sinal = prompt("Escolha: +, -, /, *  :");
    let nm1 = parseInt(prompt("Número 1: "));
    let nm2 = parseInt(prompt("Número 2: "));
    let rzt;
    if (sinal === '+') {
        rzt = nm1 + nm2;
    } else if (sinal === '-') {
        rzt = nm1 - nm2;
    } else if (sinal === '/') {
        rzt = nm1 / nm2;
    } else if (sinal === '*') {
        rzt = nm1 * nm2;
    }
    return rzt;
}
let result = calculadora();
console.log(result);

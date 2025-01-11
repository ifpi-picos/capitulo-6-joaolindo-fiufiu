function conversao(){
    let real = parseFloat (prompt("Digite o valor em real: "));
    let cvz = real * 6.11;
    return cvz;
}
let result=conversao();
console.log(result);
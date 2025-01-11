function calcularImc(){
    let altura = parseFloat(prompt("Altura"));
    let peso = parseFloat(prompt("Peso :"));
    let imc = peso / (altura * altura);
    return imc;
}
let result = calcularImc();
console.log(result);
function calcularMedia(){
    let nm1 = parseInt(prompt("Digite um número: "));
    let nm2 = parseInt(prompt("Digite um número: "));
    let nm3 = parseInt(prompt("Digite um número: "));
    let media = (nm1 + nm2 + nm3) / 3;
    return media;
}
let result=calcularMedia();
console.log ("A media é", result);
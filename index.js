let numero1 = 5;
let numero2 = 10;
let operador = '+'


let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

let resultado = 0

console.log("adição" + soma)
console.log("subtração" + subtracao)
console.log("multiplicação" + multiplicacao)
console.log("divisão" + divisao)


switch (operador) {
    case '+':
        resultado = soma
        break;

    case '-':
        resultado = subtracao
        break;

    case '*':
       resultado = multiplicacao
       break;

    case '/':

        if (numero2 == 0){
            console.log("Não é possível dividir por 0")
        }else{
            resultado = divisao
        }
        break;

    default:
        console.log("Operador inválido!")
    
        break;
}
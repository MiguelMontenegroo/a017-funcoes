function soma(num1,num2){
    const resultado = num1 + num2
    console.log(resultado)
}
function menos(num1,num2){
    const resultado2 = num1 - num2
    console.log(resultado2)
}
function divisao(num1,num2){
    const resultado3 = num1/num2
console.log(resultado3)
}
function multi(num1,num2){
    const resultado4 = num1 * num2
    console.log(resultado4)
}
const numero = Number(prompt("insira numero 1"))
const numero2 = Number(prompt("insira numero 2"))

soma(numero,numero2)
menos(numero,numero2)
divisao(numero,numero2)
multi(numero,numero2)
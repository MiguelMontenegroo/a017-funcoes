// a
function numeros(num1,num2){
const soma = num1  + num2
return soma
}
console.log(numeros(1, 1))

//b
function conferir(num1, num2){
    if(num1 >= num2){
        console.log("true")
    } else {
        console.log("false")
    }
}
conferir(1, 2)

//c

function numerosPares(num1){
    if(num1 % 2 === 0){
        console.log("ele é par")
    } else {
        console.log("ele é impar")
    }
}

const numero = 6
numerosPares(numero)

// d ?

function iteracao(parametro){
console.log(parametro.length)
console.log(parametro)
}


const mensagem = "string"
iteracao(mensagem.toUpperCase())
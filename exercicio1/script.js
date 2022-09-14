
// a)
//function digaOiNome(nome){
 //   console.log(`Olá ${nome}`)
//} 

//digaOiNome(prompt("digite seu nome"))

//b)


//const umAteDez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//function tabuadaNumero(num1){
   // for(let i in umAteDez){
  //  const resultado = num1*umAteDez[i]
  //  console.log(`${num1} x ${umAteDez[i]} = ${resultado}`)
 //   }
//}

//tabuadaNumero(6)
// c
const digaOiNome = (nome) => {
    console.log(`Olá ${nome}`)
} 

digaOiNome(prompt("digite seu nome"))

// e
const umAteDez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tabuadaNumero = (num1) => {
    for(let i in umAteDez){
        const resultado = num1*umAteDez[i]
        console.log(`${num1} x ${umAteDez[i]} = ${resultado}`)
        }
    }
    
    tabuadaNumero(6)
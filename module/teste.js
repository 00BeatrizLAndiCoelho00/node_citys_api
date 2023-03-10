const { estadosCidades } = require("./estados_cidades")
//  const nomeGenerico = function(){

//      jsonGenerico = {}

//      let a = ["joana"]

//      a.push('Alexandre')
 
//      jsonGenerico.uf = a


//      return jsonGenerico
//  }
//  console.log(nomeGenerico())

// console.log(estadosCidades.estados)
//  json2 = {}

//  let b = ["carol", "carla"]

//  json2.a = b

//  console.log(b.indexOf("carol"))

//  console.log(estadosCidades.estados.indexOf("sp"))


// const generica2 = function(a){

//     jsonGenerico = {}

//     jsonGenerico.uf = estadosCidades.estados[a].sigla
//     jsonGenerico.descricao = estadosCidades.estados[a].nome
//     jsonGenerico.capital = estadosCidades.estados[a].capital

//     return jsonGenerico
// }
// console.log(generica2(7))









//CHECAR SE A REGIAO E IGUA A B 


array = []
array2 =[]
cont = 0
while(cont < 27){
    
   array.push(estadosCidades.estados[cont].regiao)
     cont++
}

console.log(array)

if(array.indexOf("Suldeste")){
console.log("s")
}

console.log(array2)





















   


// console.log(filtro("SP"))


// module.exports ={
//     filtro
// }

// siglas = {}
//    let arraySiglas = []

//    estadosCidades.estados.forEach(estados => {
//       arraySiglas.push(estados.sigla)
//    })

//    siglas.uf = arraySiglas
//    return siglas
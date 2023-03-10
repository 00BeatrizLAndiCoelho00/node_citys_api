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











const getCidades = function (siglaEstados){
    const listaJson = {}
    const listaArry = []

    estadosCidades.estados.forEach(function(dados){

        if(siglaEstados == dados.sigla){
            dados.cidades.forEach(function(dadosCidades){
                listaArry.push(dadosCidades.nome)

            })
            
            listaJson.uf = dados.sigla
            listaJson.descricao = dados.nome
            listaJson.quantidade = listaArry.length
            listaJson.cidades = listaArry

        }
      
       
    })

    return listaJson
    }

    console.log(getCidades("SP"))
    











   


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
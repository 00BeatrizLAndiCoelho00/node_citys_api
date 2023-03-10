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


 const getCapitalPais = function (){
    const listaJson = {}
    const listaArry = []

    estadosCidades.estados.forEach(function(dados){

        if(dados.capital_pais != undefined){
            listaArry.push({
                capital_atual:dados.capital_pais.capital,
                uf:dados.sigla,
                descricao:dados.nome,
                capital:dados.capital,
                regiao:dados.regiao,
                capital_pais_ano_inicio:dados.capital_pais.ano_inicio,
                capital_pais_ano_termino:dados.capital_pais.ano_fim


            })
            listaJson.capitais = listaArry
        }

    })
    return listaJson
 }

 console.log(getCapitalPais())



















   


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
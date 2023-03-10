const { estadosCidades } = require("./estados_cidades")


const getCapitalEstado = function(a){

    let arraySiglas = []

    estadosCidades.estados.forEach(estados => {
       arraySiglas.push(estados.sigla)
    })

    b = arraySiglas.indexOf(a) 
    
   jsonGetCapitalEstado = {}

    jsonGetCapitalEstado.uf = estadosCidades.estados[b].sigla
    jsonGetCapitalEstado.descricao = estadosCidades.estados[b].nome
    jsonGetCapitalEstado .capital = estadosCidades.estados[b].capital

    return  jsonGetCapitalEstado 
    
}
console.log(getCapitalEstado("RJ"))
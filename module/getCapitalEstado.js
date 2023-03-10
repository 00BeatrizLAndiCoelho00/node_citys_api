const { estadosCidades } = require("./estados_cidades")


const getCapitalEstado = function(a){

    // 

    jsonGetCapitalEstado = {}

    jsonGetCapitalEstado.uf = estadosCidades.estados[a].sigla
    jsonGetCapitalEstado.descricao = estadosCidades.estados[a].nome
    jsonGetCapitalEstado .capital = estadosCidades.estados[a].capital

    return  jsonGetCapitalEstado 
}
console.log(getCapitalEstado(2))
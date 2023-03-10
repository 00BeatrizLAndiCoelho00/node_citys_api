
const { estadosCidades } = require("./estados_cidades")

const getDadosEstado = function(a){

    let arraySiglas = []

    estadosCidades.estados.forEach(estados => {
       arraySiglas.push(estados.sigla)
    })





    estadosCidades.estados.forEach(estados=>{
        
    })


    estadosCidades.estados.forEach(estados => {
        arraySiglas.push(estados.sigla)
     })

    b = arraySiglas.indexOf(a) 
    
   jsonGetDadosEstado = {}

   jsonGetDadosEstado.uf = estadosCidades.estados[b].sigla
   jsonGetDadosEstado.descricao = estadosCidades.estados[b].nome
   jsonGetDadosEstado.capital = estadosCidades.estados[b].capital
   jsonGetDadosEstado.regiao = estadosCidades.estados[b].regiao





    return jsonGetDadosEstado
    
}
console.log(getDadosEstado("RJ"))


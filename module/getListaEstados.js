
const { estadosCidades } = require("./estados_cidades")


const getListaDeEstados = function(){

   siglas = {}
   let arraySiglas = []

   estadosCidades.estados.forEach(estados => {
      arraySiglas.push(estados.sigla)
   })

   siglas.uf = arraySiglas
   return siglas
}

console.log(getListaDeEstados())

module.exports ={
   getListaDeEstados
}


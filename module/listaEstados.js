const { estadosCidades } = require("./estados_cidades")

const getListaDeEstados = function(){

    let siglas ={}

    siglas.uf = estadosCidades.estados

 let siglasEstados = siglas

 return siglasEstados
    
}

console.log(getListaDeEstados())

console.log("quantidade :")
console.log(estadosCidades.estados.length )



module.exports ={
    getListaDeEstados
}
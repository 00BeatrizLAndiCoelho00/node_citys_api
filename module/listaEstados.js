const { estadosCidades } = require("./estados_cidades")

const getListaDeEstados = function(){

    let siglas ={}

    let n = 0 
   
           
    let listaUfs = [estadosCidades.estados[n].sigla]

    siglas.uf = listaUfs

    let siglasEstados = siglas

    return siglasEstados
}

  
    let numeroEstado = estadosCidades.estados.length
    let cont = 0
       
    while(cont < numeroEstado){

        let n = 0
        n +  1
        cont++
        console.log(estadosCidades.estados[n].sigla)
    }

console.log(getListaDeEstados())


console.log("quantidade :")
console.log(estadosCidades.estados.length )

//let tamanho = estadosCidades.length


module.exports ={
    getListaDeEstados
}
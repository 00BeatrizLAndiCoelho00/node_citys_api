const { estadosCidades } = require("./estados_cidades")

const getListaDeEstados = function(){

    let siglas ={}
    
 
    

    let n = 0
    
     let numeroEstado = estadosCidades.estados.length
     let cont = 0
       
     while(cont < numeroEstado){
         
         n +5
     cont++
       
     }
              
    let listaUfs = [estadosCidades.estados[n].sigla]

    siglas.uf = listaUfs

    let siglasEstados = siglas

    return siglasEstados
        
    }

  
    


console.log(getListaDeEstados())


console.log("quantidade :")
console.log(estadosCidades.estados.length )

//let tamanho = estadosCidades.length


module.exports ={
    getListaDeEstados
}
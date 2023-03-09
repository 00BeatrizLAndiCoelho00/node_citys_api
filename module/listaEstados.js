const { estadosCidades } = require("./estados_cidades")

const getListaDeEstados = function(){

  

    estadosCidades.estados.forEach(estados => {
          
        let siglas ={}
         
        let listaUfs = [estados.sigla]
        
        //let lsitaLista = [listaUfs]

        siglas.uf = listaUfs
   
        let a
        a = estadosCidades.estados[1]
        //console.log(typeof(listaUfs))
        return a
  
        });
        
   
}

 ////////////////////////////////////////////////////////////////////////////// 


 console.log(getListaDeEstados())
 console.log("quantidade :")
 console.log(estadosCidades.estados.length )
 
module.exports ={
    getListaDeEstados
}
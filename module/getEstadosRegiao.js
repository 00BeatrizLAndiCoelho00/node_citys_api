const { estadosCidades } = require("./estados_cidades")

const getEstadosRegiao = function(a){


    let arrayNumeroRegiao = []

    estadosCidades.estados.forEach(estados => {
        arrayNumeroRegiao.push(estados.regiao)
    })

    b = arrayNumeroRegiao.indexOf(a) 

    jsonRegiao = {}
    jsonParaArrayRegiao = {}

    jsonParaArrayRegiao.uf = "a"
    jsonParaArrayRegiao.descricao = "a"

    arrayRegiao = [jsonParaArrayRegiao]


    numeroDeEstadosRegiao = []

    
     cont = 0
     while(cont < 27){
    
     cont++
     }

    console.log(numeroDeEstadosRegiao)

    estadosCidades.estados.forEach(estados=>{
     arrayRegiao.push(jsonParaArrayRegiao)
    })

    jsonRegiao.regiao = a
    jsonRegiao.estados = arrayRegiao

    return jsonRegiao
}
console.log(getEstadosRegiao("Sudeste"))
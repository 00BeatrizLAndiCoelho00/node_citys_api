const { estadosCidades } = require("./estados_cidades")



const getCidades = function (a){
    const jsonCidades = {}
    const arrayCidades = []

    estadosCidades.estados.forEach(function(info){

        if(a == info.sigla){
            info.cidades.forEach(function(dadosCidades){
                arrayCidades.push(dadosCidades.nome)

            })
            
            jsonCidades.uf = info.sigla
            jsonCidades.descricao = info.nome
            jsonCidades.quantidade = arrayCidades.length
            jsonCidades.cidades = arrayCidades

        }
      
       
    })

    return jsonCidades
    }

    console.log(getCidades("SP"))
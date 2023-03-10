const { estadosCidades } = require("./estados_cidades")


const getCapitalPais = function (){
    const jsonCapitalPais = {}
    const arrayCapitalPais = []

    estadosCidades.estados.forEach(function(dados){

        if(dados.capital_pais != undefined){
            arrayCapitalPais.push({
                capital_atual:dados.capital_pais.capital,
                uf:dados.sigla,
                descricao:dados.nome,
                capital:dados.capital,
                regiao:dados.regiao,
                capital_pais_ano_inicio:dados.capital_pais.ano_inicio,
                capital_pais_ano_termino:dados.capital_pais.ano_fim


            })
            jsonCapitalPais.capitais = arrayCapitalPais
        }

    })
    return jsonCapitalPais
 }

 console.log(getCapitalPais())
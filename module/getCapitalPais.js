
const getCapitalPais = function (){
    const listaJson = {}
    const listaArry = []

    estadosCidades.estados.forEach(function(dados){

        if(dados.capital_pais != undefined){
            listaArry.push({
                capital_atual:dados.capital_pais.capital,
                uf:dados.sigla,
                descricao:dados.nome,
                capital:dados.capital,
                regiao:dados.regiao,
                capital_pais_ano_inicio:dados.capital_pais.ano_inicio,
                capital_pais_ano_termino:dados.capital_pais.ano_fim


            })
            listaJson.capitais = listaArry
        }

    })
    return listaJson
 }

 console.log(getCapitalPais())
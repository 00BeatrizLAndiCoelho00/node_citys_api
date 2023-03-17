/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objetivp : Criar uma API 
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 10-03-2023
 * Version: 1.0 
 * 
 * ______________________________________________________________________________________________________________________________________________________________________//
 * 
 * Express - permite a integraçao entre http com o codigo 
 * npm install express --save
 * 
 * Cors - Tambem usa-se o cors (um gerenciador de permissoes para o protocolo htttp 
 * npm instal cors --save)
 * 
 * Body-paser  - è uma dependencia que permite manipular dados enviados pela requisicap
 * npm install body-parser --save
 * 
 * 
 * NUNCA MECHA NO NODE MODULES*/

//import dependencias para criar api

//EXPRESS responsavel pelas requisiçoes

const express = require('express')
//CORS responsaveis pelas permissoes
const cors = require('cors')

//BODY-PARSE responsaveis pela manipulaçao do body da requisiçao
const bodyParser = require('body-parser')


//import json
const estadosCidade = require('./module/estados_cidades.js');
const { json } = require('body-parser');

//cria um objt com as info da classe express
const app = express();

//A PRIMEIRA COISA È CRIAR AS PESMISSOES

//___________________________________PERMISSOES__________________________________________________________________//


    app.use((request,response,next)=>{

        //gerencia as origens das requisiçoes
        response.header('Access-Control-Allow-Origin','*')

        //Option determina de o server esta ativo
        //libera requisiçoes
        response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')


        app.use(cors())

        next()
    })
//______________________________________________GET LISTA ESTADOS_________________________________________________________________________//
    //endpoint
    //para cada requisicao cria -se um ebdpoint 
    //cada funcao cria se um endpoint 
    //asyn pede que o front n encerre a requisicao enquanto os dados caegam 
    //em todos os argumentos dos endpont coloca se os argumentos do app.use

    //endPoint para listar os estados:
    app.get('/v1/senai/estados', cors(),async function(request,response,next){

        //import arquivo funcoes
        const estadosCidade = require('./module/estados_cidades.js')
      
        //chama funcao que retorna os estados
        let listaDeEstados = estadosCidade.getListaDeEstados()
        if(listaDeEstados){

        //retorna o json
        response.json(listaDeEstados)
        response.status(200)
        }else{
            response.status(500)
        }


    })

//______________________________________________Get dados estado_______________________________________________________________________//

//url amigavel falam o que vao retornar 
//o depois da barra q tem dois pontos e uma variavel 
app.get('/v1/senai/estado/sigla/:uf', cors(),async function(request,response,next){

    //colocar id na ur para saber o que esta sendo passado
    //colocase se um identificador da string
    //cria se uma variavel local que 
    let siglaEstado = request.params.uf
    let statusCode
    let dadosEstado = {}

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length !=2 ){
    
        statusCode = 400
        dadosEstado.message = "Nâo é possivel processar a requisição pois a sigla do estado não foi  informada ou não etende  a quantidade de caracteres(dois digitos)"
        
    }else{
        //filtra estadp pela sigla 
       let estado = estadosCidade.getDadosEstado(siglaEstado)

        //valida retorno valido da funcao 
        if(estado){
            statusCode = 200
            dadosEstado = estado
            //response.json(estado)
        }else{
            statusCode = 404

        }     
    }

    response.status(statusCode)
    response.json(dadosEstado)
  //  console.log(siglaEstado)
})

//___________________________________________Get capital estado__________________________________________________________________________________________________//
app.get('/v1/senai/capital/sigla/:uf', cors(),async function(request,response,next){

    let siglaEstadoCapital = request.params.uf
    let statusCode
    let dadosEstado = {}

    if(siglaEstadoCapital == '' || siglaEstadoCapital == undefined || !isNaN(siglaEstadoCapital) || siglaEstadoCapital.length !=2 ){
    
        statusCode = 400
        dadosEstado.message = "Nâo é possivel processar a requisição pois a sigla do estado não foi  informada ou não etende  a quantidade de caracteres(dois digitos)"
        
    }else{
        //filtra estadp pela sigla 
       let estado = estadosCidade.getCapitalEstado(siglaEstadoCapital)

        //valida retorno valido da funcao 
        if(estado){
            statusCode = 200
            dadosEstado = estado
            //response.json(estado)
        }else{
            statusCode = 404

        }     
    }

    response.status(statusCode)
    response.json(dadosEstado)
    console.log(siglaEstadoCapital)
})
//____________________________________________________Get estado regiao____________________________________________________________________________________________________________//

//_____________________________________________________Get capital pais____________________________________________________________________________________________________________//

app.get('/v1/senai/pais', cors(),async function(request,response,next){

    //import arquivo funcoes
    const capitalPais = require('./module/estados_cidades.js')
  
    //chama funcao que retorna os estados
    let listaDeCapitaiDoPais = capitalPais.getCapitalPais()
    if(listaDeCapitaiDoPais){

    //retorna o json
    response.json(listaDeCapitaiDoPais)
    response.status(200)
    }else{
        response.status(500)
    }


})
//________________________________________________________Get  cidades___________________________________________________________________________________________________________//

// app.get('/cidades/sigla/:uf', cors(),async function(request,response,next){

//     let siglaCidade = request.params.uf
//     let statusCode
//     let dadosEstado = {}

//     if(siglaCidade == '' || siglaCidade == undefined || !isNaN(siglaCidade) || siglaCidade.length !=2 ){
    
//         statusCode = 400
//         dadosEstado.message = "Nâo é possivel processar a requisição pois a sigla do estado não foi  informada ou não etende  a quantidade de caracteres(dois digitos)"
        
//     }else{
//         //filtra estadp pela sigla 
//        let estado = estadosCidade.getCidades(siglaCidade)

//         //valida retorno valido da funcao 
//         if(estado){
//             statusCode = 200
//             dadosEstado = estado
//             //response.json(estado)
//         }else{
//             statusCode = 404

//         }     
//     }

//     response.status(statusCode)
//     response.json(dadosEstado)
//     console.log(siglaCidade)
// })


//_________________________________________________________________Get cidade 2___________________________________________________________________________________________________//

//nome do endpoit o q ele vai receber
//este recebe mais parametros

app.get('/v1/senai/cidades', cors(), async function(request,response, next){

    //querry string o valor da variavel que sra enviada pr querry string 
    //[-1]
    //o que tem antes do pnto de interogacao e indereço do site , oq eu divide as coisas passadas sao o e comercial &

    //usamos a query para receber diversas variaveis para realizar filtros
    //usamos o parmar para receber id
    //nome do enpoint começ com a versao / nome empresa


    let siglaCidade = request.query.uf
        let statusCode
    let dadosEstado = {}

    if(siglaCidade == '' || siglaCidade == undefined || !isNaN(siglaCidade) || siglaCidade.length !=2 ){
    
        statusCode = 400
        dadosEstado.message = "Nâo é possivel processar a requisição pois a sigla do estado não foi  informada ou não etende  a quantidade de caracteres(dois digitos)"
        
    }else{
        //filtra estadp pela sigla 
       let estado = estadosCidade.getCidades(siglaCidade)

        //valida retorno valido da funcao 
        if(estado){
            statusCode = 200
            dadosEstado = estado
            //response.json(estado)
        }else{
            statusCode = 404

        }     
    }

    response.status(statusCode)
    response.json(dadosEstado)
    console.log(siglaCidade)
})



//_______________________________________________________________________________________________________________//
//vai caregar o endpoints vai aguardar a requisiscao
    app.listen(8080,function(){
        console.log("Server aguardando requisiçoes")
    })

//_______________________________________________________________________________________________________________//

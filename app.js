/**________________________________________________________________________________________________________________________________________________________________________//
 * 
 * Objetivp : Criar uma API 
 * Author: A. Beatriz Fidelis Landi Coelho
 * Data : 10-03-2023
 * Version: 1.0 
 * 
 * ______________________________________________________________________________________________________________________________________________________________________//
 * 
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
//_______________________________________________________________________________________________________________________//
    //endpoint
    //para cada requisicao cria -se um ebdpoint 
    //cada funcao cria se um endpoint 
    //asyn pede que o front n encerre a requisicao enquanto os dados caegam 
    //em todos os argumentos dos endpont coloca se os argumentos do app.use

    //endPoint para listar os estados:
    app.get('/estados', cors(),async function(request,response,next){


        const estadosCidade = require('./module/estados_cidades.js')
      
        let listaDeEstados = estadosCidade.getListaDeEstados();

        response.json(listaDeEstados)
        response.status(200)
    })

    //vai caregar o endpoints vai aguardar a requisiscao
    app.listen(8080,function(){
        console.log("Server aguardando requisiçoes")
    })

//_______________________________________________________________________________________________________________//

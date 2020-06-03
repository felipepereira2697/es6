import express from 'express';

//Rota: Endereco completo da requisicao
//Recurso: Entidade que estamos acessando do sistema

//Agora automaticamente, desacoplamos as rotas do arquivo principal
const routes = express.Router();
//A respeito de parametros
//Request Param: Parametros que vem na propria rota e identificam um recurso
//Query param: tbm vem na propria rota mas diferente do request param, o query param pode ser opcional muito usado para filtros, paginacao
//Request body:parametros para criacao/atualizacao de informacoes
routes.get('/',(request,response) => {
    return response.json({
        message : 'Hey Felipe Pereira'
    })
})

export default routes;

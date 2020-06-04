import express from 'express';
import knex from './database/connection';

//Rota: Endereco completo da requisicao
//Recurso: Entidade que estamos acessando do sistema

//Agora automaticamente, desacoplamos as rotas do arquivo principal
const routes = express.Router();
//A respeito de parametros
//Request Param: Parametros que vem na propria rota e identificam um recurso
//Query param: tbm vem na propria rota mas diferente do request param, o query param pode ser opcional muito usado para filtros, paginacao
//Request body:parametros para criacao/atualizacao de informacoes
routes.get('/items',async (request,response) => {
    //como queries demoram no bd, precisamos usar o await
    const items = await knex('items').select('*');

    //nem sempre as infos do bd vem da forma que vc quer mostrar no front, entao vc pode serializar
    // transformar dados em um novo formato pra ficar mais facil
    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        }
    })

    return response.json(serializedItems);
})

export default routes;

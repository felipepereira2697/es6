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
            id          : item.id,
            title       : item.title,
            image_url   : `http://localhost:3333/uploads/${item.image}`,
        }
    })

    return response.json(serializedItems);
})

routes.post('/points', async (request, response) => {
    const {
        name, email,whatsapp, latitude, longitude,city, uf, items
    } = request.body;
   
    //Vamos criar uma transaction para caso ocorra algum erro nos inserts, eles nao sejam executados ja que um depende do outro
    const trx = await knex.transaction();
    const insertedIds = await trx('points').insert({
        image : 'image-fake',
        name : name, 
        email : email,
        whatsapp : whatsapp, 
        latitude : latitude, 
        longitude : longitude,
        city : city,
        uf : uf,
    });
    
    const point_id = insertedIds[0];
    const pointItems = items.map((item_id : number) => {
        return {
            item_id,
            point_id : point_id,
        }
    })

    await trx('point_items').insert(pointItems);
    return response.json({success : true});
})



export default routes;

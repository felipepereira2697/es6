import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async index(request: Request, response: Response) {
        const {city, uf, items} = request.query

        const parsedItems = String(items).split(',').map(item => Number(item.trim()));
        const points = await knex('points')
                                .join('point_items', 'points.id', '=', 'point_items.point_id')
                                .whereIn('point_items.item_id', parsedItems)
                                .where('city', String(city))
                                .where('uf', String(uf))
                                .distinct()
                                .select('points.*');

                                //.select('points.*'); --> traz dados somente da tabela points

        return response.json(points);

    }
    async show(request: Request, response: Response) {
        const id = request.params.id;
        const point = await knex('points').where('id',id).first();

        if(!point){
            return response.status(400).json({
                message : 'ERROR: Point not found'
            });
        }

        //Retorna todos os itens que estao relacionados com o ponto q estamos voltando
        /*
            SELECT * FROM items JOIN point_items ON items.id = point_items.item_id WHERE point_items.point_id = {id}
        */ 
        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id',id)
            .select('items.title');
        return response.json({point, items});
    }
    async create(request: Request, response: Response) {
        const {
            name, email,whatsapp, latitude, longitude,city, uf, items
        } = request.body;
       
        //Vamos criar uma transaction para caso ocorra algum erro nos inserts, eles nao sejam executados ja que um depende do outro
        const trx = await knex.transaction();
        const point = {
            image : 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            name : name, 
            email : email,
            whatsapp : whatsapp, 
            latitude : latitude, 
            longitude : longitude,  
            city : city,
            uf : uf,
        };
        const insertedIds = await trx('points').insert(point);
        
        const point_id = insertedIds[0];
        const pointItems = items.map((item_id : number) => {
            return {
                item_id,
                point_id : point_id,
            }
        })
    
        await trx('point_items').insert(pointItems);

        //se deu tudo certo, faz o commit da transaction
        await trx.commit();
        console.log(pointItems);
        return response.json({
            id: point_id,
            ...point
        });
    }
}

export default PointsController;
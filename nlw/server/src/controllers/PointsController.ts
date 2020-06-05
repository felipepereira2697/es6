import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async create(request: Request, response: Response) {
        const {
            name, email,whatsapp, latitude, longitude,city, uf, items
        } = request.body;
       
        //Vamos criar uma transaction para caso ocorra algum erro nos inserts, eles nao sejam executados ja que um depende do outro
        const trx = await knex.transaction();
        const point = {
            image : 'image-fake',
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
        console.log(pointItems);
        return response.json({
            id: point_id,
            ...point
        });
    }
}

export default PointsController;
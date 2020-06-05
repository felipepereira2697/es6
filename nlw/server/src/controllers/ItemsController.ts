import knex from '../database/connection';
import {Request, Response} from 'express';
class ItemsController {

    async index(request:Request ,response: Response)  {
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
    }
}

export default ItemsController;
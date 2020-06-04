import Knex from 'knex';

export async function up(knex: Knex){
    //realizar as alteracoes que precisamos 

    //CRIAR TABELA
    return knex.schema.createTable('point_items',table => {
        table.increments('id').primary();

        //Fazendo chave externa, todo id que estiver em point_id precisa ser um id valido na tabela de points
        table.integer('point_id').notNullable().references('id').inTable('points');
        table.integer('item_id').notNullable().references('id').inTable('items');

    })
}
export async function down(knex: Knex){
    //caso precisemos dar rollback

    //DELETAR TABELA
    return knex.schema.dropTable('point_items');
    

}
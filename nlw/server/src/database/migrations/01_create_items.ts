import Knex from 'knex';

export async function up(knex: Knex){
    //realizar as alteracoes que precisamos 

    //CRIAR TABELA
    return knex.schema.createTable('items',table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();

    })
}
export async function down(knex: Knex){
    //caso precisemos dar rollback

    //DELETAR TABELA
    return knex.schema.dropTable('items');
    

}
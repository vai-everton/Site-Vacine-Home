import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('servicos_feitos', table =>{
        table.increments('id').notNullable();
        table.string('titulo').notNullable();
        table.string('status', 1).notNullable();
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('servicos_feitos');
}
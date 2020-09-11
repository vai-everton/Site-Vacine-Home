import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('servicos', table => {
        table.increments('id').notNullable();
        table.string('nome_dono').notNullable();
        table.string('endereco').notNullable();
        table.string('whatsapp').notNullable();
        table.string('descricao').notNullable();
        table.integer('status');
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('servicos');
}
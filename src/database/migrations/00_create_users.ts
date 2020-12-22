import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('cpf').notNullable();
    table.date('dateOfBirth').notNullable();
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
};

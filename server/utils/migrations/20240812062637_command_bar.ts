import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('users', table => {
            table.increments('id').primary();
            table.string('username').notNullable().unique();
            table.string('email').notNullable().unique();
            table.timestamps(true, true);
        })
        .createTable('tasks', table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.text('description').notNullable();
            table.boolean('completed').defaultTo(false);
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.timestamps(true, true);
        })
        .createTable('glossary', table => {
            table.increments('id').primary();
            table.string('term').notNullable();
            table.text('definition').notNullable();
            table.timestamps(true, true);
        })
        .createTable('faq', table => {
            table.increments('id').primary();
            table.string('question').notNullable();
            table.text('answer').notNullable();
            table.timestamps(true, true);
        });

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('users')
        .dropTableIfExists('faq')
        .dropTableIfExists('glossary');
}


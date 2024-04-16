/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('item', table => {
        table.increments('id');
        table.integer('user_id');
        table.foreign('user_id').references('id').inTable('user_account');
        table.string('item_name');
        table.string('description');
        table.integer('quantity');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('item');
};

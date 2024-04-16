/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  await knex('item').insert([
    {'user_id': 1, 
    'item_name': "Backscratcher 3000", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating... Gosh darn it.", 
    'quantity': 1189},

    {'user_id': 1, 
    'item_name': "Foot Massager Pro", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating... Gosh darn it.", 
    'quantity': 500},
    
    
    {'user_id': 2, 
    'item_name': "Keyblade", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating... Gosh darn it.", 
    'quantity': 53},

    {'user_id': 2, 
    'item_name': "Keychain", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating... Gosh darn it.", 
    'quantity': 53},
  ]);
};

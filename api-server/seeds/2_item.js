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
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating. Gosh darn it. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 1189},

    {'user_id': 1, 
    'item_name': "Foot Massager Pro", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating. Gosh darn it. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 500},
    
    
    {'user_id': 2, 
    'item_name': "Keyblade", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating. Gosh darn it. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 53},

    {'user_id': 2, 
    'item_name': "Keychain", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating. Gosh darn it. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 53},
    {'user_id': 3, 
    'item_name': "Chocolate", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating. Gosh darn it. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 42},
    {'user_id': 3, 
    'item_name': "Vanilla", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating. Gosh darn it. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 66},
    {'user_id': 5, 
    'item_name': "Throwing Knives", 
    'description': "I had some really cool items and descriptions at one point. Oh well. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 118},
    {'user_id': 4, 
    'item_name': "Dalmations", 
    'description': "Lorem Ipsum... I don't know the rest and it's not auto generating. Gosh darn it. I need some more text here to make sure I'm properly cutting off at 100 chars.", 
    'quantity': 101},
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // This will run with Docker when this container is instantiated
  // Therefore the data in the database will RESET each time the Docker container is launched
  await knex.raw('TRUNCATE TABLE item RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE user_account RESTART IDENTITY CASCADE')
  // await knex('user').del()
  await knex('user_account').insert([
    {
      "first_name": "John",
      "last_name": "Doe",
      "username": "johndoe123",
      "password": bcrypt.hashSync("Password123", saltRounds)
  },
  {
    "first_name": "Alice",
    "last_name": "Smith",
    "username": "alicesmith123",
    "password": bcrypt.hashSync("Password123", saltRounds)
  },
  {
    "first_name": "Bob",
    "last_name": "Johnson",
    "username": "bob123",
    "password": bcrypt.hashSync("Password123", saltRounds)
  },
  {
    "first_name": "Emily",
    "last_name": "Brown",
    "username": "brown123",
    "password": bcrypt.hashSync("Password123", saltRounds)
  },
  {
    "first_name": "Sarah",
    "last_name": "Walker",
    "username": "walker123",
    "password": bcrypt.hashSync("Password123", saltRounds)
  }
  ]);
};

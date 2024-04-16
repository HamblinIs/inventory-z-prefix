// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://postgres:docker@127.0.0.1:5432/inventory_database"
  },

  localhost: {
    client: "postgresql",
    connection: "postgres://postgres:docker@db:5432/inventory_database"

  },

};

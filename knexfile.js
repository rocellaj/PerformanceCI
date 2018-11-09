module.exports = {
  development: {
      migrations: { tableName: 'knex_migrations' },
      seeds: { tableName: './seeds' },

      client: 'pg',
      connection: {

          host: 'localhost',

          user: 'rocellajimenez',
          password: '',

          database: 'travel',
          charset: 'utf8',
      }
  }
};
module.exports = {
  development: {
      migrations: { tableName: 'knex_migrations' },
      seeds: { tableName: './seeds' },

      client: 'pg',
      connection: {

          host: '127.0.0.1',

          user: 'rocellajimenez',
          password: '',

          database: 'travel',
          charset: 'utf8',
      }
  }
};
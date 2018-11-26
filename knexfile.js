module.exports = {
  development: {
      migrations: { tableName: 'knex_migrations' },
      seeds: { tableName: './seeds' },

      client: 'pg',
      connection: {

          host: 'localhost',

          user: 'root',
          password: '',

          database: 'travel',
          charset: 'utf8',
      }
  }
};
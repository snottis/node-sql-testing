// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      port: 5433,
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      port: 5433,
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      port: 5433,
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  }

};

// Update with your config settings.

module.exports = {

  development: {
      // our DBMS driver
      client: 'sqlite3',
      // necessary when using sqlite3
      useNullAsDefault: true,
      // the location of our db
      connection: {
        filename: './database/recipes.db3',
      },  
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        }
      },
    migrations: {
      directory: './database/migrations'
    },
    
  },
  testing: {
      client: 'sqlite3',
      connection: {
        filename: './database/test.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './seeds',
      },
  },
};
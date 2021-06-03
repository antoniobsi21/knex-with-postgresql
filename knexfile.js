// Update with your config settings.
require('dotenv/config');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    }
  }
};

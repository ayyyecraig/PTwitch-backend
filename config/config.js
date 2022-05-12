require('dotenv').config()
module.exports = {
  development: {
    database: "ptwitch_data",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    database: "ptwtichs_test",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

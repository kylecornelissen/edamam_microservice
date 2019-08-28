// const dotenv = require('dotenv');
// dotenv.config();

var config = {
  "development": {
    "username": process.env.DV_USERNAME,
    "password": null,
    "database": "microservice_self_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DV_USERNAME,
    "password": null,
    "database": "microservice_self_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "microservice_self_production",
    "host": "127.0.0.1",
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}

module.exports = config;

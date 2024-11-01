require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/techware`,
  {
    logging: false,
    native: false,
  }
);


module.exports = {
    ...sequelize.models,
    conn: sequelize,
};

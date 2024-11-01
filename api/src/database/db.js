require("dotenv").config();
const { Sequelize } = require("sequelize");

const { NAME_DATABASE, PASSWORD, USERNAME } = process.env


const sequelize = new Sequelize(NAME_DATABASE, USERNAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    native: false,
});


module.exports = {
    ...sequelize.models,
    conn: sequelize,
};

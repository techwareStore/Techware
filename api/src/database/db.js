require("dotenv").config();
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize('techware', 'postgres', 'postgres',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    native: false,
});


module.exports = {
    ...sequelize.models,
    conn: sequelize,
};

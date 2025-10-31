const { Sequelize } = require('sequelize');

const dbName = "tybca"
const dbUser = "root"
const dbPassword = ""

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:');
    });

sequelize.close()
    .then(() => {
        console.log('Connection closed successfully.');
    })
    .catch(err => {
        console.error('Error closing the connection:');
    });
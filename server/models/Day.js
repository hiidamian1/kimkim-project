const Sequelize = require('sequelize');
const db = require('../config/database');

const Days = db.define('days', {
    tripId: {
        type: Sequelize.INTEGER 
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

module.exports = Days;
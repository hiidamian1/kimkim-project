const Sequelize = require('sequelize');
const db = require('../config/database');

const Days = db.define('days', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

module.exports = Days;
const Sequelize = require('sequelize');
const db = require('../config/database');

const TripPlan = db.define('trip_plans', {
    title: {
        type: Sequelize.STRING
    },
    summary: {
        type: Sequelize.STRING
    }
});

module.exports = TripPlan;
const express = require('express');
const router = express.Router();
const db = require('../config/database');

//model
const TripPlan = require('../models/TripPlan');


router.get('/', async (req, res) => {
    const results = await TripPlan.findAll();
    res.send(results);
});

router.post('/new', async (req, res) => {
    let {title, summary} = req.body;

    try {
        await TripPlan.create({
            title,
            summary
        });

        res.sendStatus(200);
        //res.redirect('/');
    } catch(err) {
        console.log(err);
    }
});

router.post('/:id/edit', async (req, res) => {
    let {title, summary, days} = req.body;

    try {
        await TripPlan.update({
            title,
            summary
        }, {
            returning: true, where: {id: req.params.id}
        });

        res.sendStatus(200);
        //res.redirect('/');
    } catch(err) {
        console.log(err);
    }
});

router.delete('/:id/delete', async (req, res) => {
    try {
        const trip = await TripPlan.find({
            where: {
                id: req.params.id
            }
        });

        trip.destroy();
        res.sendStatus(200);
        //res.redirect('/');
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;
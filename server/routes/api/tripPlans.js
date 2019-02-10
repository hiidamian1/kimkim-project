const express = require('express');
const router = express.Router();
const db = require('../../config/database');

//model
const TripPlan = require('../../models/TripPlan');
const Day = require('../../models/Day');

//retrieve trip plan
router.get('/viewOne/:id', async (req, res) => {
  const result = await TripPlan.find({
      where: {
          id: req.params.id
      }
  }
  );
  res.send(result);
});

//retrieve trip plans
router.get('/viewAll', async (req, res) => {
  const results = await TripPlan.findAll();
  res.send(results);
});

//add trip plan
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

//edit trip plans
router.post('/:id/edit', async (req, res) => {
  let {title, summary, days} = req.body;

  try {
      let transaction = await db.transaction();
      
      await TripPlan.update({
          title,
          summary
      }, {
          returning: true, where: {id: req.params.id}
      }, {
          transaction
      });
      
      if (days) {
          days.forEach(async day => {
              await Day.upsert({
                  id: day.id,
                  tripId: day.tripId,
                  title: day.title, 
                  description: day.description
              }, 
              {
                  returning: true 
              },
              {
                  transaction
              });
          });
      }
      await transaction.commit();
      res.sendStatus(200);
          //res.redirect('/');
  } catch(err) {
      console.log(err);
  }
});

//delete trip plan
router.delete('/:id/delete', async (req, res) => {
  try {
    let transaction = await db.transaction();

    //delete days
    const days = await Day.findAll({
        where: {
          tripId: req.params.id
        }
      },
      {
        transaction
      }
    );
    days.forEach(day => day.destroy());

    //delete trip
    const trip = await TripPlan.find({
        where: {
            id: req.params.id
        }
      },
      {
        transaction
      }
    );
    trip.destroy();

    await transaction.commit();
    res.sendStatus(200);
    //res.redirect('/');
  } catch(err) {
      console.log(err);
  }
});

module.exports = router;
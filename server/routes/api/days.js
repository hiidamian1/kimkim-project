const express = require('express');
const router = express.Router();
const db = require('../../config/database');

//model
const Day = require('../../models/Day');

//retrieve day
router.get('/viewOne/:id', async (req, res) => {
  const result = await Day.findOne({
    where: {
      id: req.params.id
    }
  });
  res.send(result);
});

//retrieve days
router.get('/viewAll', async (req, res) => {
  const results = await Day.findAll();
  res.send(results);
});

//add day
router.post('/new', async (req, res) => {
  let {tripId, title, description} = req.body;

  try {
    await Day.create({
      tripId,
      title,
      description
    });

    res.sendStatus(200);
    //res.redirect('/');
  } catch(err) {
    console.log(err);
  }
});

//edit day
router.post('/:id/edit', async (req, res) => {
  let {title, description} = req.body;

  try {        
    await Day.update({
      title,
      description
    }, {
      returning: true, where: {id: req.params.id}
    });
    res.sendStatus(200);
  } catch(err) {
    console.log(err);
  }
});

//delete day
router.delete('/:id/delete', async (req, res) => {
  try {
    //delete day
    const day = await Day.find({
      where: {
        id: req.params.id
      }
    });
    day.destroy();

    res.sendStatus(200);
  } catch(err) {
      console.log(err);
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const trackController = require('./controller');

router.use((req, res, next) => {
    next();
})

// CRUD , Create, Read, Update, Delete 

//Create a track
router.post('/', (req, res) => {
    trackController
    .createTrack(req.body)
    .then(data => res.send(data))
    .catch(err => {
        console.error(err)
        res.status(500).send(err)
    })
})

//Read all track
router.get("/", (req, res) => {
    trackController
    .getAllTracks(req.body.page)
    .then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    })

  });

module.exports = router;
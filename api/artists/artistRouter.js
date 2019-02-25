const express = require('express');
const ArtistController = require('./controller');
const router = express.Router();

router.use((req, res, next) => {
    next();
})

router.post('/', (req, res) => {
    ArtistController
    .createArtist(req.body)
    .then(data => res.send(data))
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    })
})

module.exports = router;

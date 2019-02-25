const express = require("express");
const router = express.Router();

const artistController = require("./controller");
const authMiddleware = require("../auth/auth");

//CRUD ---- Create, Read, Update, Delete 

//create an artist 
router.post("/",
  authMiddleware.authorize,
  // upload.single("artist"),
  (req, res) => {
    let {name, avatar, description} = req.body;
    artistController
    .createArtist({name, avatar, description})
    .then(trackCreated => res.send(trackCreated))
    .catch(err => {
      console.error(err)
      res.status(500).send(err);
    });
  }
)

//get all artists 
router.get("/", (req, res) => {
    artistController
    .getAllArtist(req.query.page || 1)
    .then(artists => res.send(artists))
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
  });
  
//get one artist 
router.get("/:artistId", (req, res) => {
  const {artistId} = req.params;
  artistController
  .getArtist(artistId)
  .then(artist => res.send(artist))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
});


//delete an artist 
router.delete("/:id", 
  authMiddleware.authorize, 
  (req, res) => {
  const {id} = req.params;
  artistController
  .deleteArtist(id)
  .then(artist => res.send(artist))
  .catch(err => {
    console.error(err);
    res.status(err.status).send(err.status);
  });
});

//add a comment 
router.post("/:artistId/comments", authMiddleware.authorize, (req, res) => {
  req.body.userId = req.session.userInfo.id;
  console.log(req.body.userId);
  console.log(req.body.content);
  console.log(req.body)
  artistController
  .addComment(req.params.artistId, req.body)
  .then(result => {
    console.log(result);
    res.send(result)
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
});

//delete a comment 
router.delete( "/:artistId/comments/:commentId", authMiddleware.authorize, (req, res) => {
    artistController
    .deleteComment(
      req.params.artistId,
      req.params.commentId,
      req.session.userInfo.id
    )
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    })
  }
)

//update Avatar || Description 
router.put('/:artistId', (req, res) => {
  const {artistId} = req.params;
  const {name, avatar, description} = req.body;
  artistController
  .updateArtist(artistId, {name, avatar, description})
  .then(data => res.send(data))
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
})

module.exports = router;
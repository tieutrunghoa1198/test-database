const TrackModels = require('./trackModels');


//Create a track 
const createTrack = ({ songname }) => 
    new Promise((resolve, reject) => {
        TrackModels
        .create({songname})
        .then(trackCreated => resolve(trackCreated))
        .catch(err => reject(err))
})

//get all tracks
const getAllTracks = (page) => 
    new Promise((resolve, reject) => {
        TrackModels
        .find({ active: true })
        .populate('artist', 'name')
        .populate('album', 'name')
        .populate('comment.createdBy', 'username avatar')
        .sort({ createdAt: -1 })
        .skip((page - 1)*10)
        .limit(10)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })


module.exports = {
    createTrack,
    getAllTracks
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/models');


const TrackSchema = new Schema({
    songName: { type: String },
    artist: { type: Schema.Types.ObjectId, ref: 'artist', required: true},
    genre: { type: [String], default: []},
    like: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    lyrics: String,
    comment: { type: [commentModels], default: []},
    
})

module.exports = mongoose.model('track', TrackSchema);
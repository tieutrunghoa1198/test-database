const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');


const TrackSchema = new Schema({
    songname: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: 'artist'},
    genre: { type: [String], default: []},
    like: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    lyrics: String,
    comment: { type: [commentModels], default: []},
    active: { type: Boolean, default: true }
})

module.exports = mongoose.model('track', TrackSchema);
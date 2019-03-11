const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');


const TrackSchema = new Schema({
    name: { type: String, required: true },
    trackUrl: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: 'artist'}, // user upload with disorder name 
    genre: { type: [String], default: []},
    like: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    lyrics: {type: String, default: ''},
    comment: { type: [commentModels], default: []},
    active: { type: Boolean, default: true }
},
    { timestamps: { createdAt: "createdAt"}}
)

module.exports = mongoose.model('track', TrackSchema);
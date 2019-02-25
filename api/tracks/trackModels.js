const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');


const TrackSchema = new Schema({
    name: { type: String, required: true },
    trackUrl: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: 'artist'}, // user upload with disorder name 
    genre: { type: [String], default: []},
    like: { type: Number, default: 0 },
    unlike: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    lyrics: {type: String, default: ''},
    createdBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
    comment: { type: [commentModels], default: []},
    active: { type: Boolean, default: true }
},
    { timestamps: { createdAt: "createdAt"}}
)

module.exports = mongoose.model('track', TrackSchema);
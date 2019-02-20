const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');

const AlbumSchema = new Schema({
    artist: { default: 0},
    genre: [String],
    trackList: { type: Schema.Types.ObjectId, ref: 'track'},
    view: { type: Number, default: 0},
    comment: { type: [commentModels], default: []}
})

module.exports = mongoose.model('album', AlbumSchema);
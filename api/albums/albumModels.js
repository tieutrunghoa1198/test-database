const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');

const AlbumSchema = new Schema({
    name: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: 'artist', required: true },
    trackList: { type: [Schema.Types.ObjectId], ref: 'track', default: [] },
    genre: [String],
    view: { type: Number, default: 0},
    comment: { type: [commentModels], default: []}
})

module.exports = mongoose.model('album', AlbumSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');

const ArtistSchema = new Schema({
    description: String,
    track: { type: Schema.Types.ObjectId, ref: 'track'},
    album: { type: Schema.Types.ObjectId, ref: 'album'},
    comment: {type: [commentModels], default: []}
})

module.exports = mongoose.models('artist', ArtistSchema);
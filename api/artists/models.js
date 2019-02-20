const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/models');

const ArtistSchema = new Schema({
    description: String,
    track: { type: Schema.Types.ObjectId, ref: 'track', required: true},
    album: { type: Schema.Types.ObjectId, ref: 'album', required: true},
    comment: {type: [commentModels], default: []}
})

module.exports = mongoose.models('artist', ArtistSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');

const ArtistSchema = new Schema({
    description: String,
    name: { type: String, required: true },
    track: { type: Schema.Types.ObjectId, ref: 'track', default: '' },
    album: { type: Schema.Types.ObjectId, ref: 'album', default: '' },
    comment: {type: [commentModels], default: []}
})

module.exports = mongoose.models('artist', ArtistSchema);
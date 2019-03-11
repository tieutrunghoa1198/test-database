const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModels = require('../comments/commentModels');

const ArtistSchema = new Schema({
    name: { type: String, required: true },
    avatarUrl: { type: String, required: false },
    description: String,
    comment: [{type: commentModels, default: []}],
    active: { type: Boolean, default: true }
},  {
        timestamps: {  createdAt: "createAt"}
    }
)

module.exports = mongoose.model('artist', ArtistSchema);
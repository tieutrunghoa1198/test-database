const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, unique: true, required: true},
    passWord: { type: String, required: true},
    avatar: { type: String, required: true},
    email: { type: String, required: true}, 
    playlist: { type: [Schema.Types.ObjectId], ref: 'track', required: true}
})

module.exports = mongoose.model('user', UserSchema);

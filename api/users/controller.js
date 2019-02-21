const userModels = require('./userModels');

const createUser = ({ username, email, password, playlist }) =>
    new Promise(( resolve, reject ) => {
        userModels
        .create({username, email, password, playlist})
        .then(user => resolve(user))
        .catch(err => reject(err))
    });
    
const getAllUsers = page =>
    new Promise((resolve, reject) => {
        userModels
        .find({ active: true })
        .populate('playlist', {
          songname: 1,
          _id: 0
        })
        .sort({ createdAt: -1 })
        .skip((page - 1) * 20)
        .limit(20)
        .select("_id username email playlist")
        .then(user => resolve(user))
        .catch(err => reject(err));
}); 

const getOneUser = id => 
  new Promise((resolve, reject) => {
    userModels
    .findOne({
      active: true,
      _id: id
    })
    .select('_id username email')
    .then(data => resolve(data))
    .catch(err => reject(err))
  })

const deleteUser = id => 
  new Promise((resolve, reject) => {
    userModels
    .update({_id, id}, { active: false })
    .then(data => resolve(data))
    .catch(err => reject(err))
  })

const updatePassWord = (id ,password) => 
  new Promise((resolve, reject) => {
    userModels
    .findById(id)
    .then(user => {
      user.password = password;
      return user.save();
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
  })

const updateEmail = (id, email) => 
  new Promise((resolve, reject) => {
    userModels
    .findById(id)
    .then(user => {
      user.email = email;
      return user.save();
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
  })

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    deleteUser,
    updatePassWord,
    updateEmail
}
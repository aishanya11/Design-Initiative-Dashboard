const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HTTP_STATUS = require('../utility/constants');


module.exports = {

  registerUser: async (req, res, next) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    addUser(newUser, (err, user) => {
      if (err) {
        res.json({ success: false, msg: 'Failed to register user' });
      } else {
        res.json({ success: true, msg: 'User registered' });
      }
    });
  }

  authenticateUser: async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    getUserByUsername(username, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({ success: false, msg: 'User not found' });
      }

      comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const token = jwt.sign({ data: user }, process.env.SECRET, {
            expiresIn: 604800 // 1 week
          });

          res.json({
            success: true,
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({ success: false, msg: 'Wrong password' });
        }
      });
    });
  }

  getUserProfile: async (req, res, next) => {
    res.json({
      user: {
        _id: req.user._id,
        name: req.user.name,
        username: req.user.username,
        email: req.user.email,
      }
    });
  }

  getUserById = function(id, callback){
    User.findById(id, callback);
  }

  getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
  }

  addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }

  comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }

}

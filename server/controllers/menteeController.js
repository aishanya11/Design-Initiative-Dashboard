const Mentee = require('../model/Mentee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HTTP_STATUS = require('../utility/constants');

function getMenteeByUsername(username, callback) {
  const query = { username: username }
  Mentee.findOne(query, callback);
}
function addMentee(newMentee, callback) {
  // console.log(newMentee);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newMentee.password, salt, (err, hash) => {
      if (err) throw err;
      newMentee.password = hash;
      console.log(newMentee);
      
      newMentee.save(callback);
    });
  });
}
function comparePassword(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}

module.exports = {

  registerMentee: async (req, res, next) => {
    let newMentee = new Mentee({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
    // console.log(req.body);
    // console.log(newMentee);
    
    
    addMentee(newMentee, (err, user) => {
      if (err) {
        res.json({ success: false, msg: 'Failed to register user'+err});
      } else {
        res.json({ success: true, msg: 'User registered'});
      }
    });
  },

  authenticateMentee: async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    getMenteeByUsername(username, (err, user) => {
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
  },

  getMenteeProfile: async (req, res, next) => {
    res.json({
      user: {
        _id: req.user._id,
        name: req.user.name,
        username: req.user.username,
        email: req.user.email,
      }
    });
  },

  getMenteeById: function (id, callback) {
    Mentee.findById(id, callback);
  },
  getMenteeByUsername,
  addMentee,
  comparePassword
}

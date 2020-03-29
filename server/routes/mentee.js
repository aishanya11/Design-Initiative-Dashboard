const express = require('express');
const router = express.Router();
const passport = require('passport');
const menteeController = require('../controllers/menteeController');

// Register
router.post('/register', menteeController.registerMentee);

// Authenticate
router.post('/authenticate', menteeController.authenticateMentee);

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), menteeController.getMenteeProfile );

module.exports = router;

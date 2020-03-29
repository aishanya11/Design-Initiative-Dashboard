const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// Register
router.post('/register', userController.registerUser);

// Authenticate
router.post('/authenticate', userController.authenticateUser);

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUserProfile );

module.exports = router;

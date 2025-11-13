const express  = require('express');
const router = express.Router();

const {isLoggedIn} = require('../middleware');
const controller = require('../controllers/user');

router.post('/register', controller.register);

router.post('/login', controller.login);

router.post('/logout',isLoggedIn, controller.logout);

router.get('/profile', isLoggedIn, controller.profile);

module.exports = router;
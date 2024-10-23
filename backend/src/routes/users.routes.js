const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const auth = require('../middlewares/auth');

router.post('/signup', userController.signUp);
router.post('/login', userController.login);

router.put('/update-email', auth, userController.updateEmail);
router.put('/update-password', auth, userController.updatePassword);

module.exports = router;

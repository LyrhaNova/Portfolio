const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const auth = require('../middlewares/auth');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signin);

router.get('/getMe', auth, userController.getMe);

router.post('/logout', auth, userController.logout);

router.patch('/update-email', auth, userController.updateEmail);
router.patch('/update-password', auth, userController.updatePassword);

module.exports = router;

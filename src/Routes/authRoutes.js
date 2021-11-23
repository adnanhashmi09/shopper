const { Router } = require('express');
const controller = require('../Controllers/authController');

const router = Router();

router.post('/login', controller.login_post);
router.post('/signup', controller.signup_post);
router.post('/logout', controller.logout);
router.get('/isLoggedIn', controller.isLoggedIn);

module.exports = router;

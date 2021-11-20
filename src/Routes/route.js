const { Router } = require('express');
const controller = require('../Controllers/controller');

const router = Router();

router.get('/', controller.print);
module.exports = router;

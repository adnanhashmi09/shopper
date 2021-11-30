const { Router } = require('express');
const controller = require('../Controllers/prodController');

const router = Router();

router.get('/products', controller.fetchProducts);

module.exports = router;

const { Router } = require('express');
const multer = require('multer');
const controller = require('../Controllers/controller');

// The memory storage engine stores the files in memory as Buffer objects.
const storage = multer.memoryStorage();
const upload = multer({ storage }); // configuring multer to store image buffer in memory
const router = Router();

router.post(
	'/upload-product',
	upload.single('productImage'),
	controller.upload_product
);

router.get('/products', controller.fetchProducts);

router.post('/pushcart', controller.addCart);

router.post('/cart', controller.fetchCart);

router.post('/clearcart', controller.clearCart);

router.post('/order', controller.placeOrder);

module.exports = router;

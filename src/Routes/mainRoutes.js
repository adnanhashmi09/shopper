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

module.exports = router;

const DatauriParser = require('datauri/parser');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const pool = require('../database/db');

const parser = new DatauriParser();

// require('dotenv').config();

// cloudinary config
cloudinary.config({
	cloud_name: 'dep937cl7',
	api_key: '456522911832583',
	api_secret: 'N0Zrxjo_1PfN0pCkvhv-9M7Rw5Y',
});

// function to convert incoming file from frontend to a buffer
const dataURI = (req) =>
	parser.format(
		path.extname(req.file.originalname).toString(),
		req.file.buffer
	);

module.exports.upload_product = async (req, res) => {
	const { name, category, price, stock } = req.body;
	try {
		const seller = await pool.query(
			'SELECT s_id FROM seller WHERE user_id = $1 ',
			[req.session.uid]
		);
		const sellerID = seller.rows[0].s_id;

		const file = dataURI(req).content;
		const response = await cloudinary.uploader.upload(file);

		await pool.query(
			'INSERT INTO product ( s_id, name, price, stock, category, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
			[sellerID, name, +price, +stock, category, response.url]
		);

		res.status(200).json({ msg: 'Product added successfully' });
	} catch (error) {
		console.error(error);
		res.status(400).json({ error });
	}
};

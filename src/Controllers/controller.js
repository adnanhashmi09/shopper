/* eslint-disable array-callback-return */
const DatauriParser = require('datauri/parser');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const format = require('pg-format');
const pool = require('../database/db');

const parser = new DatauriParser();

// require('dotenv').config();

// cloudinary config
cloudinary.config({
	cloud_name: 'comders',
	api_key: '849994789835335',
	api_secret: 'iiSbCTjPLzsgRHJcp8f9caNaTTU',
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

module.exports.fetchProducts = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT DISTINCT name, category, image, price FROM product'
        );
        res.status(200).json({ data: result.rows });
    } catch (err) {
        console.log(err);
    }
};

// replace req.session.id with customer or session id

module.exports.addCart = async (req, res) => {
	const { products, customer } = req.body;
	const data = [];
	products.map((product) => {
		const { name, quantity } = product;
		console.log(product);
		data.push([name, customer, quantity]);
	});
	console.log(data);
	try {
		await pool.query(
			format('INSERT INTO cart (name, c_id, quantity) VALUES %L '
				+ 'ON CONFLICT ON CONSTRAINT cart_key DO UPDATE set quantity = EXCLUDED.quantity '
				+ 'RETURNING *', data)
		);

		const deleted = await pool.query(
			'DELETE FROM cart WHERE quantity = 0 RETURNING *'
		);

		res.json(deleted);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error });
	}
};

module.exports.fetchCart = async (req, res) => {
	const { customer } = req.body;

	try {
		const result = await pool.query(
			`SELECT * FROM cart WHERE c_id = ${customer}`
		);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error });
	}
};

module.exports.clearCart = async (req, res) => {
	const { customer } = req.body;
    try {
        await pool.query(
            `DELETE FROM cart WHERE c_id = ${customer}`
        );
		res.status(200).json({ success: 'rows deleted' });
    } catch (error) {
        console.log(error);
		res.status(400).json({ error });
    }
};

module.exports.placeOrder = async (req, res) => {
	const { products, customer, payment } = req.body;
	const { mode, price, status } = payment;
	const data = [];
	products.map((product) => {
		const { name, quantity } = product;
		console.log(product);
		data.push([name, customer, quantity, `(${mode}, ${price}, ${status})`]);
	});

	try {
		const result = await pool.query(
			format('INSERT INTO orders (name, c_id, quantity, payments) VALUES %L RETURNING *', data)
		);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error });
	}
};

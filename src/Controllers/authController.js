/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const pool = require('../database/db');
const { validateCredentials } = require('../utils/authValidate');
const { addCart } = require('../utils/cartUtils');

// error handling
const handleError = (ERROR) => {
	const err = { email: '', password: '' };

	if (ERROR.code == 23505) {
		err.email = 'A user with this email already exists';
		return err;
	}
	ERROR.error.forEach((el) => {
		err[el.field] = el.msg;
	});

	return err;
};

// controller functions for routes

module.exports.signup_post = async (req, res) => {
	try {
		const { email, password, name, type, address } = req.body;

		validateCredentials(email, password);
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = await pool.query(
			'INSERT INTO users (email, password, name, address) VALUES($1, $2, $3, $4) RETURNING *',
			[email, hashedPassword, name, address]
		);

		const { id, name: fullName, email: emailAddress } = newUser.rows[0];

		const isA = await pool.query(
			`INSERT INTO ${type} (user_id) VALUES($1) RETURNING *`,
			[id]
		);

		const userType = Object.keys(isA.rows[0])[0];
		const { s_id, c_id } = isA.rows[0];

		req.session.uid = (c_id || s_id);
		req.session.utype = (c_id ? 'c_id' : 's_id');

		res.json({ id, name: fullName, email: emailAddress, type: userType });
	} catch (error) {
		console.error(error);
		const err = handleError(error);
		res.status(400).json(err);
	}
};

module.exports.login_post = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await pool.query('SELECT * FROM users WHERE email=$1', [
			email,
		]);

		if (!user) {
			throw {
				error: [{ msg: 'No user with the email exists', field: 'email' }],
			};
		}

		const isMatch = await bcrypt.compare(password, user.rows[0].password);
		if (!isMatch) {
			throw {
				error: [{ msg: 'The password is incorrect', field: 'password' }],
			};
		}

		const { id, name, email: emailAddress } = user.rows[0];

		let result = await pool.query(
			`SELECT * FROM seller WHERE user_id = ${id}`
		);

		if (result.rows.length === 0) {
			result = await await pool.query(
				`SELECT * FROM customer WHERE user_id = ${id}`
			);
		}
		const { s_id, c_id } = result.rows[0];

		req.session.uid = (c_id || s_id);
		req.session.utype = (c_id ? 'c_id' : 's_id');

		res.json({ id, name, email: emailAddress });
	} catch (error) {
		console.error(error);
		const err = handleError(error);
		res.status(400).json(err);
	}
};

module.exports.logout = async (req, res) => {
	const { uid } = req.session;
	const { cart } = req.body;
	try {
		await addCart(cart, uid);

		req.session.destroy((error) => {
			if (error) {
				console.error(error);
				const err = handleError(error);
				res.status(400).json(err);
			}
		res.json({ msg: 'logged out.' });
		});
	} catch (error) {
		console.log(error);
		res.json({ error });
	}
};

module.exports.isLoggedIn = (req, res) => {
	console.log(req.session);
	if (req.session.uid) {
		res.json({ id: req.session.uid, utype: req.session.utype });
	} else {
		res.send(false);
	}
};

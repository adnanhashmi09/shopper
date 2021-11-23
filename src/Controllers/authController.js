const bcrypt = require('bcrypt');
const pool = require('../database/db');
const { validateCredentials } = require('../utils/authValidate');

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
		const { email, password, name, address } = req.body;

		validateCredentials(email, password);
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = await pool.query(
			'INSERT INTO users (email, password, name, address) VALUES($1, $2, $3, $4) RETURNING *',
			[email, hashedPassword, name, address]
		);

		const { id, name: fullName, email: emailAddress } = newUser.rows[0];
		req.session.uid = id;
		res.json({ id, name: fullName, email: emailAddress });
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
		req.session.uid = id;
		res.json({ id, name, email: emailAddress });
	} catch (error) {
		console.error(error);
		const err = handleError(error);
		res.status(400).json(err);
	}
};

module.exports.logout = (req, res) => {
	req.session.destroy((error) => {
		if (error) {
			console.error(error);
			const err = handleError(error);
			res.status(400).json(err);
		}

		res.send('logged out.');
	});
};

module.exports.isLoggedIn = (req, res) => {
	if (req.session.uid) {
		res.json({ id: req.session.uid });
	} else {
		res.send('not logged In');
	}
};

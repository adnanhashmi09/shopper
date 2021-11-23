const { isEmail, isStrongPassword } = require('validator');

module.exports.validateCredentials = (email, password) => {
	const options = {
		minLength: 8,
		minLowercase: 1,
		minUppercase: 1,
		minNumbers: 0,
		minSymbols: 0,
	};

	if (!isEmail('' + email) && !isStrongPassword(password, options)) {
		throw {
			error: [
				{ msg: 'Please enter a valid email.', field: 'email' },
				{
					msg: 'The password should be atleast 8 characters long and must contain a capital letter',
					field: 'password',
				},
			],
		};
	}

	if (!isEmail('' + email)) {
		throw { error: [{ msg: 'Please enter a valid email.', field: 'email' }] };
	}

	if (!isStrongPassword(password, options)) {
		throw {
			error: [
				{
					msg: 'The password should be atleast 8 characters long and must contain a capital letter',
					field: 'password',
				},
			],
		};
	}
};

/* eslint-disable array-callback-return */
const format = require('pg-format');
const pool = require('../database/db');

module.exports.addCart = async (products, customer) => {
	const data = [];
	products.map((product) => {
		const { name, quantity } = product;
		data.push([name, customer, quantity]);
	});
	console.log(data);
	try {
		await pool.query(
			`DELETE FROM cart WHERE c_id = ${customer}`
		);

		const result = await pool.query(
			format('INSERT INTO cart (name, c_id, quantity) VALUES %L '
				+ 'ON CONFLICT ON CONSTRAINT cart_key DO UPDATE set quantity = EXCLUDED.quantity '
				+ 'RETURNING *', data)
		);

		return result;
	} catch (error) {
		console.log(error);
		return { error };
	}
};

module.exports.clearCart = async (customer) => {
    try {
        await pool.query(
            `DELETE FROM cart WHERE c_id = ${customer}`
        );
        return { success: 'rows deleted' };
    } catch (error) {
        console.log(error);
        return { error };
    }
};

const pool = require('../database/db');

// controller functions for products

module.exports.fetchProducts = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT DISTINCT p_id, name, category, description FROM product'
        );
        res.json({ data: result.rows });
    } catch (err) {
        console.log(err);
    }
};

import React, { useLayoutEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Styles/Checkout.css';

const Checkout = () => {

	return (
		<div className="chmain">
			<div className="st">
				<h3>Subtotal</h3>
				<h5>$ 56.6</h5>
			</div>
			<hr />
			<div className="tax">
				<h3>Tax</h3>
				<h5>$ 3.4</h5>
			</div>
			<hr />
			<div className="ttl">
				<h1>Total</h1>
				<h1>$ 60.0</h1>
			</div>
			<Link to="/deliver">
				<div className="chdbtn">
					<button className="chbtn">
						<p>Checkout</p>
					</button>
				</div>
			</Link>
		</div>
	);
};

export default Checkout;

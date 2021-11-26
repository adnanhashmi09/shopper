import React, { useLayoutEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Styles/Checkout.css';

const Checkout = () => {
	const history = useHistory();

	useLayoutEffect(() => {
		fetch('http://localhost:5000/isLoggedIn', {
			method: 'GET',
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (!data.id) {
					history.push('/login');
				}
			});
	}, []);

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
			<Link to="/checkout">
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

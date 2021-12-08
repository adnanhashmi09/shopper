import React, { useLayoutEffect, useState, useEffect } from 'react';

import Navbar from '../Components/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faRupeeSign,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';

import '../Styles/Cart.css';
import { useCart, useDispatchCart } from '../Context/Reducers';
import '../Styles/Checkout.css';
import { Link } from 'react-router-dom';
// import Checkout from './Checkout';

const Cart = ({ product, handleRemove }) => {
	const dispatch = useDispatchCart();

	return (
		<>
			<div className="imagec">
				<img src={product.image} alt="" className="imgc" />
			</div>

			<div className="productc">
				<div className="itemc">{product.name}</div>
			</div>

			<div className="pricec">
				<FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon>
				{product.price}
			</div>
			<div className="qtyc">
				<button className="qtyb" onClick={() => dispatch({ type: "DECREMENT", name: product.name })}>
					<FontAwesomeIcon
						icon={faMinus}
					></FontAwesomeIcon>
				</button>
				<input type="number" value={product.quantity} disabled />
				<button className="qtyb" onClick={() => dispatch({ type: "INCREMENT", name: product.name })}>
					<FontAwesomeIcon
						icon={faPlus}
					></FontAwesomeIcon>
				</button>
			</div>
			<div className="remc">
				<FontAwesomeIcon
					icon={faTrash}
					color="red"
					size="2x"
					onClick={() => handleRemove(product.name)}
				></FontAwesomeIcon>
			</div>
		</>
	);
};

export default function Store() {
	const items = useCart();
	const { cart } = items;
	const dispatch = useDispatchCart();

	const history = useHistory();
	const [auth, setAuth] = useState(false);

	useLayoutEffect(() => {
		fetch('http://localhost:5000/isLoggedIn', {
			method: 'GET',
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (!data.id) {
					setAuth(false);
					history.push('/login');
				} else {
					setAuth(true);
				}
			});
	}, []);

	useEffect(() => {
		console.log(auth);
	}, [auth]);

	const handleRemove = (name) => {
		dispatch({ type: 'REMOVE', name });

	}
	const handleClearCart = () => {
		dispatch({ type: 'CLEAR' });
	};

	let amount = 0;
	if(cart.length !== 0){
		for(let i=0; i< cart.length ;i++){
			amount += cart[i].quantity*cart[i].price
		}
		console.log("amount", amount);
	}


	if (cart.length === 0) {
		return (
			<>
				{auth ? (
					<>
						<Navbar />
						<main className="ecart">
							<p>Cart is empty</p>
						</main>
					</>
				) : null}
			</>
		);
	}
	return (
		<>
			{auth ? (
				<>
					<Navbar />
					<h1 className="header">CART</h1>
					<div className="cmain">
						<div className="left">
							<div className="subleft">
								{cart.map((item, idx) => (
									<div className="sleft">
										<Cart
											handleRemove={handleRemove}
											key={idx}
											product={item}
										/>
									</div>
								))}
							</div>
							<div className="clearcart">
								<button onClick={handleClearCart} className="ccbtn">
									{' '}
									Clear Cart
								</button>
							</div>
						</div>
						<div className="right">
							<div className="subright">
								<div className="chmain">
									<div className="st">
										<h3>Subtotal</h3>
										<h5>{amount}</h5>
									</div>
									<hr />
									<div className="tax">
										<h3>Tax</h3>
										<h5>{(amount*0.18).toFixed(1)}</h5>
									</div>
									<hr />
									<div className="ttl">
										<h1>Total</h1>
										<h1>{(amount*1.18).toFixed(1)}</h1>
									</div>
									<Link to="/deliver">
										<div className="chdbtn">
											<button className="chbtn">
												<p>Checkout</p>
											</button>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}

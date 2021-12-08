import React, { useState } from 'react';
import '../Styles/SignUp.css';
import { Link, useHistory } from 'react-router-dom';
import image1 from '../Assets/3.jpeg';

const SignUp = ({ authHandler }) => {
	const history = useHistory();
	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(name, email, address, +number, type);
		try {
			const response = await fetch('http://localhost:5000/signup', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					address,
					type,
					password,
					number: +number,
				}),
				credentials: 'include',
			});
			const data = await response.json();
			console.log(response);
			console.log(data);

			if (!response.ok) {
				throw data;
			}
			authHandler(true);
			history.push('/');
		} catch (error) {
			console.log(error);
			alert(error.email + '\n' + error.password);
		}
	};

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [number, setNumber] = useState(null);
	const [type, setType] = useState('customer');

	return (
		<>
			<section className="psect">
				<div className="ssmain">
					<div className="left">
						<img src={image1} alt="Heroimage" className="image" />
					</div>
					<div className="right">
						<div className="heading">
							<Link to="/" className="i">
								<h1 className="h">MARKET</h1>
							</Link>
						</div>
						<div className="intro">Welcome to Market</div>
						<div className="inp">
							<div className="linp">
								<form className="sform" 
								onSubmit={submitHandler}
								>
									<input
										type="text"
										placeholder="Your Name"
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
										required
									/>
									<select
										type="text"
										placeholder="Continue as a ...?"
										className="uinp"
										value={type}
										onChange={(e) => setType(e.target.value)}
									>
										<option disabled selected>
											Continue as a ...?
										</option>
										<option>Customer</option>
										<option>Seller</option>
									</select>
									<input
										type="email"
										placeholder="Your email"
										required
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<input
										type="text"
										placeholder="Your Contact Number"
										required
										value={number}
										onChange={(e) => setNumber(e.target.value)}
									/>
									<input
										type="text"
										placeholder="Your Address"
										required
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>

									<input
										type="password"
										placeholder="Password"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<div className="button">
										<input
											type="submit"
											value="Sign Up"
											className="signin"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUp;

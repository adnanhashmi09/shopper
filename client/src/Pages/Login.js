import React, { useState } from 'react';
import '../Styles/Login.css';
import { Link, useHistory } from 'react-router-dom';
import image1 from '../Assets/3.jpeg';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/login', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
				credentials: 'include',
			});
			const data = await response.json();
			console.log(data);

			if (!response.ok) {
				throw data;
			}
			history.push('/');
		} catch (error) {
			console.log(error);
			alert(error.email + '\n' + error.password);
		}
	};

	return (
		<section className="psect">
			<div className="lmain">
				<div className="left">
					<img src={image1} alt="someImage" className="image" />
				</div>
				<div className="right">
					<div className="heading">
						<Link to="/" className="i">
							<h1 className="h">MARKET</h1>
						</Link>
					</div>
					<div className="intro">Welcome to Market</div>
					<div className="inp">
						<form className="form" 
							onSubmit={loginHandler}
						>
							<input
								type="text"
								placeholder="Your Name"
								className="uinp"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>

							<input
								type="password"
								placeholder="Your Password"
								className="linp"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<input type="submit" value="Sign In" className="signin" />
						</form>
					</div>
					{/* <div className="wrapper">
              <div className="button">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="gicon"
                ></FontAwesomeIcon>
                <span className="gspan"> Sign in using Google</span>
              </div>
            </div> */}
				</div>
			</div>
		</section>
	);
};

export default Login;

import React, { useLayoutEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';

const Navbar = () => {
	// useLayoutEffect(() => {
	// 	fetch('http://localhost:5000/isLoggedIn', {
	// 		method: 'GET',
	// 		credentials: 'include',
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			if (data.id) {
	// 				setAuth(true);
	// 			} else {
	// 				setAuth(false);
	// 			}
	// 		});
	// }, []);

	const [trigger, setTrigger] = useState(false);
	const [auth, setAuth] = useState(false);
	const history = useHistory();
	const handleClick = () => setTrigger(!trigger);

	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	// const logoutHandler = async () => {
	// 	try {
	// 		const response = await fetch('http://localhost:5000/logout', {
	// 			method: 'POST',
	// 			credentials: 'include',
	// 		});

	// 		const data = await response.json();
	// 		setAuth(false);
	// 		history.push('/login');

	// 		console.log(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="logo">
					MARKET
				</Link>

				<ul className="comps">
					<li className="its">
						<Link to="/" className="i">
							Home
						</Link>
					</li>
					{/* <li className="its">
              <Link to="/products" className="i">
                Products
              </Link>
            </li> */}
					<li
						className="nav-item its"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Products
						</Link>
						{dropdown && <Dropdown />}
					</li>
				</ul>

				<ul className="esstls">
					<li className="its">
						<Link to="/sell">
							<FontAwesomeIcon
								icon={faUser}
								size="2x"
								color="#000"
								className="user"
							></FontAwesomeIcon>
						</Link>
					</li>
					{auth ? (
						<>
							<li
								className="its"
								style={{ cursor: 'pointer' }}
								onClick={logoutHandler}
							>
								Log Out
							</li>

							<li className="its">
								<Link to="/cart" className="lo">
									<FontAwesomeIcon
										icon={faShoppingCart}
									></FontAwesomeIcon>
								</Link>
							</li>
						</>
					) : (
						<>
							<li className="its">
								<Link to="/signup" className="lo">
									Sign Up
								</Link>
							</li>

							<li className="its">
								<Link to="/login" className="su">
									Sign In
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

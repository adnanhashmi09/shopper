import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown';

const Navbar = () => {

  const [trigger, setTrigger] = useState(false);

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
            <li className="its">
              <div className="sc">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="2x"
                  className="si"
                  onClick={handleClick}
                ></FontAwesomeIcon>
                <input type="text" className={trigger ? "t" : "nt"} />
              </div>
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

            <li className="its">
              <Link to="/login" className="lo">
                Log Out
              </Link>
            </li>

            <li className="its">
              <Link to="/cart" className="lo">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navbar

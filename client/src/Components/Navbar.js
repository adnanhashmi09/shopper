import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [trigger, setTrigger] = useState(false);

  const handleClick = () => setTrigger(!trigger);

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
            <li className="its">
              <Link to="/products" className="i">
                Products
              </Link>
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
              <Link to="/login">
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

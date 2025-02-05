import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>GharKhoj</h1>
      </div>
      <ul className="nav-links">
        <li><a href="./Home">Home</a></li>
        <li><a href="./Rent">Rent</a></li>
        <li><a href="./Buy">Buy</a></li>
        <li><a href="./Sell">Sell</a></li>
      </ul>
      <div className="login">
        <FontAwesomeIcon
          icon={faUser}
          className="login-icon"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="dropdown-login">
            <form>
              <label>Email:</label>
              <input type="email" placeholder="Enter Email" />
              <label>Password:</label>
              <input type="password" placeholder="Enter Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.status === 200) {
      setTimeout(() => {
        setShowModal(false);
      }, 1500);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>GharKhoj</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/rent">Rent</a>
        </li>
        <li>
          <a href="/buy">Buy</a>
        </li>
        <li>
          <a href="/sell">Sell</a>
        </li>
      </ul>
      <div className="login">
        <FontAwesomeIcon
          icon={faUser}
          className="login-icon"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <button type="submit">Login</button>
            </form>
            <p>{message}</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

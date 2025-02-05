import "./styles/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PropertyDetails from "./components/PropertyDetails";
import React, { useState, useEffect } from "react";
import Rent from "./pages/Rent";
import ViewDetails from "./pages/ViewDetails";

const App = () => {
  const [user, setUser] = useState(null); // Track user authentication status

  useEffect(() => {
    // Fetch login status from Flask backend
    const fetchUser = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/login-status", {
          credentials: "include", // Ensures cookies are sent
        });
        const data = await response.json();
        if (data.user) setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} /> {/* Pass user state to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/view/:id" element={<ViewDetails />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
import "./styles/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PropertyDetails from "./components/PropertyDetails";
import React, { useState, useEffect } from "react";
import Rent from "./pages/Rent";
import ViewDetails from "./pages/ViewDetails";

const App = () => {
  const [user, setUser] = useState(null); // Track user authentication status

  useEffect(() => {
    // Fetch login status from Flask backend
    const fetchUser = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/login-status", {
          credentials: "include", // Ensures cookies are sent
        });
        const data = await response.json();
        if (data.user) setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} /> {/* Pass user state to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/view/:id" element={<ViewDetails />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

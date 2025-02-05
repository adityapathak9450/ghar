import "./App.css";

import React, { useState } from "react";

import axios from "axios";

function App() {
  const [area, setArea] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before submitting

    try {
      const response = await axios.get(`http://127.0.0.1:5000/prediction/${area}`);
      setPredictedPrice(response.data.predicted_price);
    } catch (error) {
      setError("Failed to fetch prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>House Price Prediction</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Area (in sqft):</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
              className="input"
            />
          </div>
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Loading..." : "Get Predicted Price"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {predictedPrice !== null && !error && (
          <div className="result">
            <h2>Predicted Price: ₹{predictedPrice}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

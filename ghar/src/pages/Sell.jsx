import React, { useState } from 'react';

import axios from 'axios';

const Sell = () => {
  const [area, setArea] = useState('');
  const [bhk, setBhk] = useState('');
  const [bath, setBath] = useState('');
  const [balcony, setBalcony] = useState('');
  const [region, setRegion] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        area: parseInt(area),
        bhk: parseInt(bhk),
        bath: parseInt(bath),
        balcony: parseInt(balcony),
        region: region
      });
      setPredictedPrice(response.data.predicted_price);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error occurred while making the prediction.');
      setPredictedPrice(null);
    }
  };

  return (
    <div>
      <h2>House Price Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Area (sqft)" value={area} onChange={(e) => setArea(e.target.value)} />
        <input type="number" placeholder="BHK" value={bhk} onChange={(e) => setBhk(e.target.value)} />
        <input type="number" placeholder="Bathrooms" value={bath} onChange={(e) => setBath(e.target.value)} />
        <input type="number" placeholder="Balconies" value={balcony} onChange={(e) => setBalcony(e.target.value)} />
        <input type="text" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)} />
        <button type="submit">Predict</button>
      </form>

      {predictedPrice && <p>Predicted Price: ₹{predictedPrice}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Sell;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/CryptoPriceDisplay.css'; // Import your CSS file

const CryptoPriceDisplay = () => {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setPrices(response.data.bpi);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="container mt-5">
      {prices && Object.keys(prices).map(currency => (
        <div key={currency} className={`card ${currency.toLowerCase()}`}>
          <div className="card-body">
            <h5 className="card-title">{prices[currency].description}</h5>
            <p className="card-text">
              <span className="currency-symbol">                {currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '€'}</span>
              <span className="currency-rate">{prices[currency].rate}</span>
              <span className="currency-code">{prices[currency].code}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoPriceDisplay;

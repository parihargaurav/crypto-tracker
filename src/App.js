import React from 'react';
import CryptoPriceDisplay from './components/CryptoPriceDisplay';

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Crypto Price Tracker</h1>
      <CryptoPriceDisplay />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '1.5rem',
    },
  },
};

export default App;

import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [prices, setPrices] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("/market/prices");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPrices(data);
      } catch (err) {
        setError("Unable to fetch market prices. Make sure the backend server is running.");
        console.error("Error fetching prices:", err);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Live Market Prices (Simulated)</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul>
          {Object.entries(prices).map(([pair, price]) => (
            <li key={pair} className="mb-2">
              {pair}: {price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;

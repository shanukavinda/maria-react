// DataDisplay.js
import React, { useEffect, useState } from 'react';
import db  from './db';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the database
    db.query('SELECT * FROM ci_customer LIMIT 10', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
      } else {
        setData(results);
      }
    });  
  }, []);

  return (
    <div>
      <h1>Data from MariaDB</h1>
      <ul>
        {data.map((row) => (
          <li key={row.id}>{row.full_name_en}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

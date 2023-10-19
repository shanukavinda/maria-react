import React, { useEffect, useState } from 'react';
import mysql from 'mysql2';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const db = mysql.createConnection({
      host: '192.168.1.59',
      user: 'user',
      password: '123',
      database: 'cmisdb',
    });

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

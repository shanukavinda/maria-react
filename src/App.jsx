import { useState, useEffect } from 'react'
const mysql = require('mysql2');
import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    // Replace with your database credentials
    const connection = mysql.createConnection({
      host: '192.168.1.59',
      user: 'user',
      password: '123',
      database: 'cmisdb'
    });

    connection.query('SELECT * FROM ci_city', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }

      setData(results);
    });

    connection.end();
  }, []);

  

  return (
    <>
      <div>
      <h1>Retrieved Data:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.columnName}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App

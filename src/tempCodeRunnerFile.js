import mysql from 'mysql2';

const db = mysql.createConnection({
    host: '192.168.1.59',
    user: 'user',
    password: '123',
    database: 'cmisdb',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MariaDB:', err);
        return;
    }
    console.log('Connected to MariaDB');
});

db.query('SELECT * FROM ci_customer LIMIT 10', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
    } else {
      console.log(results);
    }
  });

export { db };

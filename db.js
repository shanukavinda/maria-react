// db.js
const mysql = require('mysql');

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

module.exports = db;

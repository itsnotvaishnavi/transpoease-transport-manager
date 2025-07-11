
const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a connection pool with explicit error handling
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'transpoease',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 60000 // Increase timeout to 60 seconds
});

// Test the pool to see if it works
pool.getConnection()
  .then(connection => {
    console.log('Database connection pool initialized successfully');
    connection.release();
  })
  .catch(err => {
    console.error('Failed to initialize database pool', err);
  });

module.exports = pool;

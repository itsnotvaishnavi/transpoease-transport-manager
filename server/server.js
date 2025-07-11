const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2/promise');
const pool = require('./db');

// Import routes
const userRoutes = require('./routes/users');
const vehicleRoutes = require('./routes/vehicles');
const licenseRoutes = require('./routes/licenses');
const permitRoutes = require('./routes/permits');
const complaintRoutes = require('./routes/complaints');

const app = express();
const PORT = process.env.PORT || 5000;

// Test database connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to MySQL database!');
    connection.release();
  } catch (err) {
    console.error('Error connecting to MySQL database:', err);
    console.error('Please check your MySQL credentials and ensure MySQL server is running');
  }
})();

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for development
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Debugging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/licenses', licenseRoutes);
app.use('/api/permits', permitRoutes);
app.use('/api/complaints', complaintRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to TranspoEase API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Server error', details: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Database connection details: ${process.env.DB_HOST}, ${process.env.DB_USER}, ${process.env.DB_NAME}`);
});

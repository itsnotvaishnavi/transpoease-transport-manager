const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create a new complaint
router.post('/', async (req, res) => {
  try {
    const { name, phone_number, subject, complaint_details } = req.body;
    const [result] = await pool.query(
      `INSERT INTO complaints (name, phone_number, subject, complaint_details) VALUES (?, ?, ?, ?)`,
      [name, phone_number, subject, complaint_details]
    );
    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit complaint', details: error.message });
  }
});

// Get all complaints
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM complaints');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch complaints', details: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create a new license
router.post('/', async (req, res) => {
  try {
    const { 
      license_no, name, address, con_no, dob,
      qualification, gender, vehicle_type, valid_date, u_id 
    } = req.body;
    
    const [result] = await pool.query(
      `INSERT INTO licenses 
       (license_no, name, address, con_no, dob, qualification, gender, vehicle_type, valid_date, u_id) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [license_no, name, address, con_no, dob, qualification, gender, vehicle_type, valid_date, u_id]
    );
    
    res.status(201).json({
      message: 'License created successfully',
      licenseNo: license_no
    });
  } catch (error) {
    console.error('Error creating license:', error);
    res.status(500).json({ error: 'Failed to create license', details: error.message });
  }
});

// Get all licenses
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM licenses');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching licenses:', error);
    res.status(500).json({ error: 'Failed to fetch licenses' });
  }
});

// Get license by number
router.get('/:licenseNo', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM licenses WHERE license_no = ?', [req.params.licenseNo]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'License not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching license:', error);
    res.status(500).json({ error: 'Failed to fetch license' });
  }
});

// Get licenses by user ID
router.get('/user/:userId', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM licenses WHERE u_id = ?', [req.params.userId]);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching user licenses:', error);
    res.status(500).json({ error: 'Failed to fetch user licenses' });
  }
});

// Update license
router.put('/:licenseNo', async (req, res) => {
  try {
    const { 
      name, address, con_no, dob, qualification,
      gender, vehicle_type, valid_date
    } = req.body;
    
    const [result] = await pool.query(
      `UPDATE licenses SET 
       name = ?, address = ?, con_no = ?, dob = ?, qualification = ?, 
       gender = ?, vehicle_type = ?, valid_date = ?
       WHERE license_no = ?`,
      [name, address, con_no, dob, qualification, gender, vehicle_type, valid_date, req.params.licenseNo]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'License not found' });
    }
    
    res.json({ message: 'License updated successfully' });
  } catch (error) {
    console.error('Error updating license:', error);
    res.status(500).json({ error: 'Failed to update license' });
  }
});

// Delete license
router.delete('/:licenseNo', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM licenses WHERE license_no = ?', [req.params.licenseNo]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'License not found' });
    }
    
    res.json({ message: 'License deleted successfully' });
  } catch (error) {
    console.error('Error deleting license:', error);
    res.status(500).json({ error: 'Failed to delete license' });
  }
});

module.exports = router;

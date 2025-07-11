const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  try {
    const { reg_no, make, model, color } = req.body;
    const [result] = await pool.query(
      `INSERT INTO vehicles (reg_no, make, model, color) VALUES (?, ?, ?, ?)`,
      [reg_no, make, model, color]
    );
    res.status(201).json({ message: 'Vehicle registered successfully', reg_no });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register vehicle', details: error.message });
  }
});

// Get all vehicles
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM vehicles');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
});

// Get vehicle by registration number
router.get('/:regNo', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM vehicles WHERE reg_no = ?', [req.params.regNo]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).json({ error: 'Failed to fetch vehicle' });
  }
});

// Update vehicle
router.put('/:regNo', async (req, res) => {
  try {
    const { 
      make, model, year, type, color, chassis_no,
      engine_no, con_no, email_id
    } = req.body;
    
    const [result] = await pool.query(
      `UPDATE vehicles SET 
       make = ?, model = ?, year = ?, type = ?, color = ?, 
       chassis_no = ?, engine_no = ?, con_no = ?, email_id = ?
       WHERE reg_no = ?`,
      [make, model, year, type, color, chassis_no, engine_no, con_no, email_id, req.params.regNo]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    
    res.json({ message: 'Vehicle updated successfully' });
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({ error: 'Failed to update vehicle' });
  }
});

// Delete vehicle
router.delete('/:regNo', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM vehicles WHERE reg_no = ?', [req.params.regNo]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).json({ error: 'Failed to delete vehicle' });
  }
});

module.exports = router;

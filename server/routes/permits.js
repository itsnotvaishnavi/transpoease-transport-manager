const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create a new permit
router.post('/', async (req, res) => {
  try {
    const { permit_no, reg_no, type_of_permit, route } = req.body;
    
    const [result] = await pool.query(
      `INSERT INTO permits (permit_no, reg_no, type_of_permit, route) VALUES (?, ?, ?, ?)`,
      [permit_no, reg_no, type_of_permit, route]
    );
    
    res.status(201).json({ message: 'Permit created successfully', permit_no });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create permit', details: error.message });
  }
});

// Renew a permit
router.post('/renew', async (req, res) => {
  try {
    const { permit_no, reg_no, valid_date, previous_valid_date } = req.body;
    
    const [result] = await pool.query(
      `INSERT INTO permit_renewals (permit_no, reg_no, valid_date, previous_valid_date) 
       VALUES (?, ?, ?, ?)`,
      [permit_no, reg_no, valid_date, previous_valid_date]
    );
    
    // Update the permit's valid_date
    await pool.query(
      'UPDATE permits SET valid_date = ? WHERE permit_no = ?',
      [valid_date, permit_no]
    );
    
    res.status(201).json({
      message: 'Permit renewed successfully',
      renewalId: result.insertId
    });
  } catch (error) {
    console.error('Error renewing permit:', error);
    res.status(500).json({ error: 'Failed to renew permit', details: error.message });
  }
});

// Get all permits
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM permits');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching permits:', error);
    res.status(500).json({ error: 'Failed to fetch permits' });
  }
});

// Get permit by number
router.get('/:permitNo', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM permits WHERE permit_no = ?', [req.params.permitNo]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Permit not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching permit:', error);
    res.status(500).json({ error: 'Failed to fetch permit' });
  }
});

// Get permits by vehicle registration
router.get('/vehicle/:regNo', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM permits WHERE reg_no = ?', [req.params.regNo]);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching vehicle permits:', error);
    res.status(500).json({ error: 'Failed to fetch vehicle permits' });
  }
});

// Update permit
router.put('/:permitNo', async (req, res) => {
  try {
    const { type_of_permit, valid_date, route } = req.body;
    
    const [result] = await pool.query(
      'UPDATE permits SET type_of_permit = ?, valid_date = ?, route = ? WHERE permit_no = ?',
      [type_of_permit, valid_date, route, req.params.permitNo]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Permit not found' });
    }
    
    res.json({ message: 'Permit updated successfully' });
  } catch (error) {
    console.error('Error updating permit:', error);
    res.status(500).json({ error: 'Failed to update permit' });
  }
});

// Delete permit
router.delete('/:permitNo', async (req, res) => {
  try {
    // First delete any renewals
    await pool.query('DELETE FROM permit_renewals WHERE permit_no = ?', [req.params.permitNo]);
    
    // Then delete the permit
    const [result] = await pool.query('DELETE FROM permits WHERE permit_no = ?', [req.params.permitNo]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Permit not found' });
    }
    
    res.json({ message: 'Permit deleted successfully' });
  } catch (error) {
    console.error('Error deleting permit:', error);
    res.status(500).json({ error: 'Failed to delete permit' });
  }
});

// Get renewal history for a permit
router.get('/:permitNo/renewals', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM permit_renewals WHERE permit_no = ? ORDER BY renew_date DESC',
      [req.params.permitNo]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching permit renewals:', error);
    res.status(500).json({ error: 'Failed to fetch permit renewals' });
  }
});

module.exports = router;


const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { id, name, dob, address, contact, attribute } = req.body;
    
    const [result] = await pool.query(
      'INSERT INTO users (id, name, dob, address, contact, attribute) VALUES (?, ?, ?, ?, ?, ?)',
      [id || `USR-${Math.floor(1000 + Math.random() * 9000)}`, name, dob, address, contact, attribute]
    );
    
    res.status(201).json({
      message: 'User registered successfully',
      userId: id || result.insertId
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user', details: error.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Update user
router.put('/:id', async (req, res) => {
  try {
    const { name, dob, address, contact, attribute } = req.body;
    const userId = req.params.id;
    
    const [result] = await pool.query(
      'UPDATE users SET name = ?, dob = ?, address = ?, contact = ?, attribute = ? WHERE id = ?',
      [name, dob, address, contact, attribute, userId]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;

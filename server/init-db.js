const mysql = require('mysql2/promise');
require('dotenv').config();

const createTables = async () => {
  let connection;
  try {
    // Create a connection to the MySQL server (without specifying a database initially)
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '12345',
    });

    console.log('Connected to MySQL server');

    const dbName = process.env.DB_NAME || 'transpoease';

    // Create database if it doesn't exist
    await connection.query('CREATE DATABASE IF NOT EXISTS ?? CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci', [dbName]);
    console.log(`Database ${dbName} created or already exists`);

    // Use the database
    await connection.query('USE ??', [dbName]);
    console.log(`Using database ${dbName}`);

    // Drop existing tables and reset foreign key checks
    console.log('Dropping existing tables...');
    await connection.query('SET FOREIGN_KEY_CHECKS = 0');
    await connection.query('DROP TABLE IF EXISTS permit_renewals');
    await connection.query('DROP TABLE IF EXISTS complaints');
    await connection.query('DROP TABLE IF EXISTS permits');
    await connection.query('DROP TABLE IF EXISTS licenses');
    await connection.query('DROP TABLE IF EXISTS vehicles');
    await connection.query('DROP TABLE IF EXISTS users');
    await connection.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log('Tables dropped successfully');

    // Create users table with id as INT
    console.log('Creating users table...');
    await connection.query(`
      CREATE TABLE users (
        id INT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        dob DATE NOT NULL,
        address TEXT NOT NULL,
        contact VARCHAR(100) NOT NULL,
        attribute VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('Users table created successfully');

    // Create vehicles table with u_id as INT
    console.log('Creating vehicles table...');
    await connection.query(`
      CREATE TABLE vehicles (
        reg_no VARCHAR(10) PRIMARY KEY,
        make VARCHAR(50) NOT NULL,
        model VARCHAR(50) NOT NULL,
        year INT NOT NULL,
        type VARCHAR(20) NOT NULL,
        color VARCHAR(20),
        chassis_no VARCHAR(50),
        engine_no VARCHAR(50),
        con_no VARCHAR(15),
        email_id VARCHAR(100),
        u_id INT NOT NULL,
        registered_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (u_id) REFERENCES users(id)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('Vehicles table created successfully');

    // Create licenses table with u_id as INT
    console.log('Creating licenses table...');
    await connection.query(`
      CREATE TABLE licenses (
        license_no VARCHAR(10) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        address TEXT NOT NULL,
        con_no VARCHAR(15) NOT NULL,
        dob DATE NOT NULL,
        qualification VARCHAR(100),
        gender ENUM('male', 'female', 'other') NOT NULL,
        vehicle_type VARCHAR(20) NOT NULL,
        issue_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        valid_date DATE NOT NULL,
        u_id INT NOT NULL,
        FOREIGN KEY (u_id) REFERENCES users(id)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('Licenses table created successfully');

    // Create permits table
    console.log('Creating permits table...');
    await connection.query(`
      CREATE TABLE permits (
        permit_no VARCHAR(10) PRIMARY KEY,
        reg_no VARCHAR(10) NOT NULL,
        type_of_permit VARCHAR(50) NOT NULL,
        issue_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        valid_date DATE NOT NULL,
        route TEXT,
        FOREIGN KEY (reg_no) REFERENCES vehicles(reg_no)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('Permits table created successfully');

    // Create permit renewals table
    console.log('Creating permit renewals table...');
    await connection.query(`
      CREATE TABLE permit_renewals (
        renewal_id INT AUTO_INCREMENT PRIMARY KEY,
        permit_no VARCHAR(10) NOT NULL,
        reg_no VARCHAR(10) NOT NULL,
        renew_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        valid_date DATE NOT NULL,
        previous_valid_date DATE,
        FOREIGN KEY (permit_no) REFERENCES permits(permit_no),
        FOREIGN KEY (reg_no) REFERENCES vehicles(reg_no)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('Permit renewals table created successfully');

    // Create complaints table with u_id as INT
    console.log('Creating complaints table...');
    await connection.query(`
      CREATE TABLE complaints (
        complain_no VARCHAR(10) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        mob_no VARCHAR(15) NOT NULL,
        complain_type VARCHAR(50),
        complain_details TEXT NOT NULL,
        u_id INT NOT NULL,
        submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status ENUM('pending', 'in_progress', 'resolved', 'closed') DEFAULT 'pending',
        resolution TEXT,
        FOREIGN KEY (u_id) REFERENCES users(id)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('Complaints table created successfully');

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed');
    }
  }
};

createTables();
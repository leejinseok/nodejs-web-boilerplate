const connectionInfo = require(__base + 'config/database');
const mysql = require('mysql2/promise');
const pool = mysql.createPool(connectionInfo);

exports.getConnection = async () => {
  try {
    return await pool.getConnection(async conn => conn);
  } catch (err) {
    throw new Error(err);
  }
}
const connectionInfo = require(__base + 'config/database');
const mysql = require('mysql2/promise');
const pool = mysql.createPool(connectionInfo);

/**
 * 
 */
exports.query = async (sql) => {
  try {
    const connection = await pool.getConnection(async conn => conn);
    try {
      const result = await connection.query(sql);
      connection.release();
      return result;
    } catch (err) {
      connection.release();
      throw new Error(err);
    }
  } catch (err) {
    throw new Error(err);
  }
}

exports.tableName = 'Members';

const connectionInfo = require(__base + 'config/database');
const mysql = require('mysql2/promise');
const pool = mysql.createPool(connectionInfo);

/**
 * 
 */
exports.query = async (sql) => {
  let connection = null;
  try {
    connection = await pool.getConnection(async conn => conn);
  } catch (err) {
    throw new Error(err);
  }

  try {
    let result = await connection.query(sql);
    connection.release();
    return result;
  } catch (err) {
    connection.release();
    throw new Error(err);
  }
}

exports.tableName = 'Members';

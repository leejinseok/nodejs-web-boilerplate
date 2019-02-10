const connectionInfo = require(__base + 'config/database');
const mysql = require('mysql2/promise');
const pool = mysql.createPool(connectionInfo);

class Model {
  constructor () {
  }

  async getConnection () {
    try {
      return await pool.getConnection(async connection => connection);
    } catch (err) {
      throw new Error(err);
    }
  }

  async query (sql) {
    let connection = null;
    try {
      connection = await this.getConnection();
    } catch (err) {
      throw new Error(err);
    }

    try {
      const result = await connection.query(sql);
      return result;
    } catch (err) {
      throw new Error(err);
    } finally {
      connection.release();
    }
  }
}

module.exports = Model;
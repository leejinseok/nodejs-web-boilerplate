const connectionInfo = require(__base + 'config/database');
const mysql = require('mysql2/promise');
const pool = mysql.createPool(connectionInfo);

class Model {
  constructor () {
    return (async () => {
      try {
        this.connection = await pool.getConnection(async connection => connection);
      } catch (error) {
        throw new Error(error);
      }
      return this;
    })();
  }

  async query (sql) {
    try {
      const result = await this.connection.query(sql);
      this.connection.release();
      return result;
    } catch (err) {
      this.connection.release();
      throw new Error(err);
    }
  }
}

module.exports = Model;
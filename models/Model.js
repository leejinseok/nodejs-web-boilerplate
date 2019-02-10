const connectionInfo = require(__base + 'config/database');
const mysql = require('mysql2/promise');
const pool = mysql.createPool(connectionInfo);

class Model {
  constructor () {
    return new Promise (async (resolve, reject) => {
      try {
        this.connection = await pool.getConnection(async conn => conn);
      } catch (error) {
        reject(error);
      }
      resolve(this);
    });
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
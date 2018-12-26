const connectionInfo = require(__base + 'config/database');
const mysql = require('mysql');
const pool = mysql.createPool(connectionInfo);

/**
 * 
 */
exports.query = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      connection.query(sql, (err, rows, fields) => {
        connection.release();
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    })
  });
}


exports.tableName = 'TB_MEMBER';

const Model = require('../../../models/Members')
const Members = require('../../../models/Members')

exports.getTest = (req, res, next) => {
  let connection = null
  try {
    connection = await Model.getConnection()
  } catch (error) {
    return next(error)
  }

  let result = null
  // try {
  //   await connection.beginTransaction()
  //   result = await connection.query(`SELECT * FROM ${Member.tableName}`)
  //   connection.release()
  // } catch (error) {
  //   return next(error)
  // } finally {
  // }

  // try {
  //   await connection.beginTransaction()
  //   await connection.query(`INSERT INTO ${Member.tableName} (id, pwd) VALUES ('id', 'pwd')`)
  //   await connection.query(`INSERT INTO ${Member.tableName} (id, pw2d) VALUES ('id', 'pwd')`)
  //   connection.commit()
  // } catch (error) {
  //   connection.rollback()
  //   return next(error)
  // }
}
const Members = require('../../../models/Members');

exports.getTest = (req, res, next) => {
  let membersModel = null;
  try {
    membersModel = await new Members();
  } catch (error) {
    return next(error);
  }

  let result = null;
  try {
    result = await membersModel.query(`SELECT * FROM ${Members.tableName}`);    
  } catch (error) {
    return next(error); 
  }
}
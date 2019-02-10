const Model = require('./Model');

class Members extends Model {
  constructor () {
    super();
  }
}

exports.init = Members;
exports.tableName = 'Members';

const Model = require('./Model');

class Members extends Model {
  constructor () {
    super();
  }

  static get tableName () {
    return 'Members';
  }
}

module.exports = Members;

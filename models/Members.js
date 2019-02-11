const Model = require('./Model');

class Members extends Model {
  constructor () {
    super();
  }

  static get tableName () {
    return 'Members';
  }

  async insertMember (member) {
    let connection = null;
    try {
      connection = await super.getConnection();
    } catch (err) {
      throw new Error(err);
    }

    let sql = `INSERT INTO ${Members.tableName} (email, pwd, reg_date) VALUES ('${member.email}', '${member.pwd}')`;
    let result = null;
    try {
      result = await connection.query(sql);
    } catch (err) {
      throw new Error(err);
    }

    return result;
  }
}

module.exports = Members;

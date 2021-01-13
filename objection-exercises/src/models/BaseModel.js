const { Model } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  async $beforeUpdate(){ 
    this.updated_at = new Date().toISOString()
  }
}

module.exports = BaseModel

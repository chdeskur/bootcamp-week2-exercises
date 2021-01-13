// Write your relation model here!
const { HasOneThroughRelation, ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }
}

module.exports = Relation


/*
join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id'
        }
        */

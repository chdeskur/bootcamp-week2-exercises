exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .unique()
    .notNullable()
    .defaultTo(knex.raw('uuid_generate_v4()'))
    .primary()

  table 
    .uuid('requestor').references('users.id')
    .notNullable()

  table
    .uuid('requestee').references('users.id')
    .notNullable()

  table 
    .string('dateOfRequest')
    .notNullable()

  table
    .enum('status', ['ACCEPTED','PENDING','REJECTED'])
    .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')

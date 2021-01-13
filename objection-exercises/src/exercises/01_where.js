const cleanup = require('../lib/cleanup')
// Import models

const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const specific = await Pet.query().where('name', 'Deon')
  console.log(specific)

  // Do the same with object notation
  const object = await Pet.query().where({ name: 'Deon' })
  console.log(object)

  // Get all DOGS and BIRDS
  const dogBird = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogBird)

  // -----
  cleanup()
}

run()

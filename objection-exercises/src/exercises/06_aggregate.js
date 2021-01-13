const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const size = await User.query().resultSize()
  console.log(size)

  // Get the average age of users
  const avg = await User.query().avg('age as avgAge')
  console.log(avg)

  // Get the total number of dogs
  const dogs = await Pet.query().where('type', 'DOG').resultSize()
  console.log(dogs)

  // -----
  cleanup()
}

run()

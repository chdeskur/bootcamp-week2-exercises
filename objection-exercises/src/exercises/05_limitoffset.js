const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const first = await User.query().orderBy('lastName').limit(5)
  console.log(first)

  // Get the second 5 users, ordered by lastName
  const second = await User.query().orderBy('lastName').limit(5).offset(5)
  console.log(second)

  // -----
  cleanup()
}

run()

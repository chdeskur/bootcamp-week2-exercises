const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const user = await User.query().where('age', '<', 18).first()
  const minor = user.isAdult()
  const anotherUser = await User.query().where('age', '>', 18).first()
  const adult = anotherUser.isAdult()
  console.log(user)
  console.log(anotherUser)
  if (minor) {
    console.log('user is an adult')
  } else {
    console.log('user is a minor')
  }
  if (adult) {
    console.log('user is an adult')
  } else {
    console.log('user is a minor')
  }

  // -----
  cleanup()
}

run()

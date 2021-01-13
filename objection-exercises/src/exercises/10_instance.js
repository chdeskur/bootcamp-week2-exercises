const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const casual = require('casual')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)

  // Use that instance to create a new pet related that user

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  const cath = await User.query().findOne({ firstName: 'Cath' })
  await cath.$relatedQuery('pet').insert({
    id: casual.uuid, 
    ownerId: cath.id,
    type: 'DOG',
    name: casual.first_name, 
    created_at: casual.moment,
    updated_at: casual.moment
  })

  const update = await cath.$fetchGraph('[pet,children]')
  console.log(update)


  cleanup()
}

run()

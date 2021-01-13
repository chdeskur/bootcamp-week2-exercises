const cleanup = require('../lib/cleanup')
const casual = require('casual')
// Import models

const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const me = await User.query().insert({
    age: 18, 
    created_at: casual.moment,
    email: casual.email,
    firstName: 'Catherine', 
    id: casual.uuid,
    lastName: 'Deskur',
    updated_at: casual.moment
  }).returning('*')
  console.log(me)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  

  const pet = await Pet.query().insert({
    id: casual.uuid, 
    ownerId: me.id, 
    name: 'Fluffy', 
    type: 'CAT', 
    created_at: casual.moment, 
    updated_at: casual.moment
  }).returning('*')

  console.log(pet)
  // -----
  cleanup()
}

run()

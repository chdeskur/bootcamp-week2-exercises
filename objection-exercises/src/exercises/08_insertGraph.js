const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const casual = require('casual')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const graph = await User.query().insertGraph({
    age: 4, 
    created_at: casual.moment,
    email: casual.email,
    firstName: 'Peter', 
    id: casual.uuid,
    lastName: 'Bynum',
    updated_at: casual.moment,
    pet: [
      {
        id: casual.uuid, 
        ownerId: this.id,
        type: 'DOG',
        name: casual.first_name, 
        created_at: casual.moment,
        updated_at: casual.moment
      }, {
        id: casual.uuid, 
        ownerId: this.id,
        type: 'DOG',
        name: casual.first_name, 
        created_at: casual.moment,
        updated_at: casual.moment
      }
    ]
  })
  console.log(graph)

  // -----
  cleanup()
}

run()

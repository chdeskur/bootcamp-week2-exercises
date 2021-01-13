const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const casual = require('casual')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */


  // -----

  try {
    const insert = await User.transaction(async trx => {
      const cath = await User.query(trx).insert({
        id: casual.uuid,
        email: casual.email,
        age: 18, 
        firstName: 'Cath', 
        lastName: 'Deskur', 
        created_at: casual.moment,
        updated_at: casual.moment
      }).returning('*')
  
      const pet = await cath.$relatedQuery('pet', trx).insert({
        type: 'CAT', name: casual.first_name
      })
  
      console.log(pet)
  
      return cath
    })

    console.log(insert)
  } catch (err) {
    console.error('this is an error')
  }

  const amount = await Pet.query().resultSize()

  if (amount > 15) {
    console.log(amount)
    const update = await Pet.query().delete().where({ type: 'BIRD' })
    console.log(update)
  }

  cleanup()
}

run()

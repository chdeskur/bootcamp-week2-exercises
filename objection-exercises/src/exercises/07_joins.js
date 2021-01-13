const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const userPet = await User.query().withGraphJoined('pet')
  console.dir(userPet, { depth: 3 })

  // Get all users, their pets, AND their children
  const userPetChild = await User.query().withGraphJoined('[pet,children]')
  console.dir(userPetChild, { depth: 10 })

  // Get all users, their parents, and their grandparents
  const userParentGrand = await User.query().withGraphFetched('parent.^2')
  console.log(userParentGrand)

  // Get all users, their pets, their chilren, and their childrens' pets
  const userPetChildPet = await User.query().withGraphFetched('[pet,children,children.pet]')
  console.dir(userPetChildPet, { depth: 3 })

  // -----
  cleanup()
}

run()
